import React from 'react';
import './Customer.css';
import ReactDOM from 'react-dom';

class CustomerAppC extends React.Component {
  constructor() {
    // state GUI 
    // props GUI
    super();
    this.state = { 
        items: [
          {id:1,name:'VIvek',email:'vivek@abc.com',phone:'89898989', address:'India'},
          {id:2,name:'Pari',email:'pari@abc.com',phone:'653423662', address:'Asia'},
          {id:3,name:'Rama',email:'rama@abc.com',phone:'653423662', address:'Asia'}
        ], 
       id:0, 
       name: '',
       email:'',
       phone:'',
       address:'' };
  }
  doEdit=(id)=>{
    console.log("doEdit request :"+id);
    let tempItems = this.state.items.filter((item)=>(item.id==id));
    if(tempItems.length > 0){
      this.setState({
        ...tempItems[0]
      })
    }
  }
  doDelete=(id)=>{ // step 1
    console.log("delete request :"+id);
    let tempItems = this.state.items.filter((item)=>(item.id!=id));
    this.setState({items:tempItems});
  }
  handleCancel = (e) => {
    this.setState({
      id:0,
      name:'',
      email:'',
      phone:'',
      address:'',
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      address:this.state.address,
      id: Date.now()
    };
    let tempItems ;
    if(this.state.id != 0){ //edit
      newItem.id = this.state.id;
      for(var i= 0; i<this.state.items.length;i++ ){
        if(this.state.items[i].id == this.state.id){ //no render
          this.state.items[i] =  newItem;
          break;
        }
      }
      tempItems = this.state.items;
    }else{ //add
      tempItems = [newItem,...this.state.items];
    }

    this.setState(() => ({
      items: tempItems,
      id:0,
      name: '',
      email: '',
      phone: '',
      address: ''
    }));
    document.getElementById('name').focus();
  }
  render() {
    return (
      <div>
        <h3>Customer App</h3>
          <input name="name" id="name" placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          /><br/><br/>
          <input name="email" placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          /><br/><br/>
           <input name="phone" placeholder="Phone"
            onChange={this.handleChange}
            value={this.state.phone}
          /><br/><br/>
           <input name="address" placeholder="Address"
            onChange={this.handleChange}
            value={this.state.address}
          /><br/><br/>
          <button onClick={this.handleSubmit}>
            Add Customer
          </button>&nbsp;&nbsp;
          <button onClick={this.handleCancel}>
            Cancel
          </button><br/><br/>
        <CustomerList 
        items={this.state.items} 
        delRecord={this.doDelete}
        editRecord={this.doEdit} /> 
      </div>
    );
  }
}
function CustomerList({items,delRecord,editRecord}) {
return (
  <div>
  <table style={{width:'100%'}}>
  <thead>
  <tr>
    <th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {items.map(item => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.address}</td>
    <td><button onClick={()=>{editRecord(item.id)}} >Edit</button></td>
    <td><button onClick={()=>{delRecord(item.id)}} >Delete</button></td>
  </tr>
  ))}
  </tbody>
  </table>
  </div>
);
}

export default CustomerAppC;