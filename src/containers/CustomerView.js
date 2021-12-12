import React, { useEffect, useState } from 'react';
import './Customer.css';
import { addCustomer, deleteCustomer, getCustomers, updateCustomer } from '../service/CustomerAPI';
import Menu from '../components/Menu';

function CustomerAppF () { //copt
    const[name,setName] = useState(''); //2 copies DOM ref
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[address,setAddress] = useState('');
    const[id,setId] = useState(0);
    const[items,setItems] = useState([]);
    let loadCustomers = async() =>{
       let customers = await getCustomers();
       setItems(customers);
    }
    useEffect(()=>{
        loadCustomers();
    },[])

  let doEdit=(id)=>{
    console.log("doEdit request :"+id);
    let tempItems = items.filter((item)=>(item.id==id));
    if(tempItems.length > 0){
        let item = tempItems[0];
        setName(item.name);
        setEmail(item.email);
        setPhone(item.phone);
        setAddress(item.address);
        
        setId(item.id); // lazy
    }
  }
  let doDelete= async(id)=>{ // step 1
    console.log("delete request :"+id);
    await deleteCustomer(id);
    loadCustomers();
  }
  let doCopy=(id)=>{ // step 1
    console.log("doCopy request :"+id);
    let tempItems = items.filter((item)=>(item.id==id));
    let copyItem = {...tempItems[0]}; //tempItems[0]
    copyItem.id = Date.now();
    setItems([...items,  copyItem]);
  }
  let handleCancel = (e) => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setId(0);
  }
  let handleSubmit = async (e) => {
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
      await updateCustomer(newItem);
    }else{ //add
      await addCustomer(newItem);
    }
    loadCustomers();
    handleCancel();
  }
    return (
      <div>
          <Menu/>
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
            Add Customer
          </button>&nbsp;&nbsp;
          <button onClick={handleCancel}>
            Cancel
          </button><br/><br/>
        <CustomerList 
        items={items} 
        delRecord={doDelete}
        editRecord={doEdit}
        doCopy={doCopy}
         /> 
      </div>
    );
}
function CustomerList({items,delRecord,editRecord,doCopy}) {
return (
  <div>
  <table style={{width:'100%'}}>
  <thead>
  <tr>
    <th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {items.map(item => (
  <tr key={item.id}>
    <td >{item.id}</td>
    <td id={item.id}>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.address}</td>
    <td><button onClick={()=>{editRecord(item.id)}} >Edit</button></td>
    <td><button onClick={()=>{delRecord(item.id)}} >Delete</button></td>
    <td><button onClick={()=>{doCopy(item.id)}} >Copy</button></td>
  </tr>
  ))}
  </tbody>
  </table>
  </div>
);
}

export default CustomerAppF;