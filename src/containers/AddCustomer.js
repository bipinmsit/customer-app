import React, { useEffect, useState } from 'react';
import './Customer.css';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu';
import { useNavigate ,useParams } from "react-router-dom"; //singleton
import {addCustomer, getCustomerById, updateCustomer} from '../service/CustomerData';

function CustomerAppF () { //copt
    const navigate = useNavigate();
    let { customerId } = useParams();
    const[items,setItems] = useState([
        {id:1,name:'VIvek',email:'vivek@abc.com',phone:'89898989', address:'India'},
        {id:2,name:'Pari',email:'pari@abc.com',phone:'653423662', address:'Asia'},
        {id:3,name:'Rama',
        email:'rama@abc.com',phone:'653423662', address:'Asia', dob:new Date()}
      ]);
    const[name,setName] = useState(''); //2 copies DOM ref
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[address,setAddress] = useState('');
    const[id,setId] = useState(0);
    const[bLabel,setBLabel] = useState("Add Customer");
    
    let updateEditCustomer = (customerId)=>{
        let customer = getCustomerById(customerId);
        console.log("customer:",customer);
        let {id,name,email,phone,address} = customer;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setAddress(address);
        setId(id);
        setBLabel("Update Customer");
    }
    useEffect(()=>{
        console.log("id is::"+customerId);
       if(customerId){
        updateEditCustomer(customerId);
       }
    },[])

  let handleCancel = (e) => {
    navigate('/customer');
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      return;
    }
    const newItem = {
      name,
      email,
      phone,
      address,
      id: Date.now()
    };
    let tempItems ;
    if(id != 0){ //edit
      newItem.id = id;
      updateCustomer(newItem);
    }else{ //add
      addCustomer(newItem)
    }
    handleCancel();
  }
    return (
      <div>
        <Menu/>
        <h3>Customer App</h3>
          <input name="name" id="name" placeholder="Name"
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          /><br/><br/>
          <input name="email" placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          /><br/><br/>
           <input name="phone" placeholder="Phone"
            onChange={(e)=>{setPhone(e.target.value)}}
            value={phone}
          /><br/><br/>
           <input name="address" placeholder="Address"
            onChange={(e)=>{setAddress(e.target.value)}}
            value={address}
          /><br/><br/>
          <button onClick={handleSubmit}>
            {bLabel}
          </button>&nbsp;&nbsp;
          <button onClick={handleCancel}>
            Cancel
          </button><br/><br/>
      </div>
    );
}

export default CustomerAppF;