let customers =[
    {id:1,name:'VIvek',email:'vivek@abc.com',phone:'89898989', address:'India'},
    {id:2,name:'Pari',email:'pari@abc.com',phone:'653423662', address:'Asia'},
    {id:3,name:'Rama',
    email:'rama@abc.com',phone:'653423662', address:'Asia', dob:new Date()}
  ];

if(localStorage.getItem('_customers') != null){
    try{
       let temp = JSON.parse(localStorage.getItem('_customers'));
       customers = temp;
    }catch(e){
    }
}

let saveLocalStorage = () =>{
    localStorage.setItem('_customers',JSON.stringify(customers));
}
export const getCustomers = () =>(customers);

export const addCustomer = (record) =>{
    customers.push(record);
    saveLocalStorage();
}
export const updateCustomer = (record) =>{
    let tempList = customers.filter((item)=>(item.id==record.id));
    if(tempList.length > 0){
        tempList[0].name = record.name;
        tempList[0].email = record.email;
        tempList[0].phone = record.phone;
        tempList[0].address = record.address;
    }
    saveLocalStorage()

}
export const deleteCustomer = (id) =>{
    customers = customers.filter((item)=>(item.id!=id));
    saveLocalStorage();
}

export const getCustomerById = (id) =>{
    let tempList = customers.filter((item)=>(item.id==id));
    if(tempList.length > 0){
        return tempList[0];
    }else{
        return {};
    }
}

