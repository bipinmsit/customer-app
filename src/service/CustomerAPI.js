const apiEndPoint = "https://nodeapi.pyther.com/customer"

 // Representational State Transfer Application Programming Interface 
 // "https://nodeapi.pyther.com/account"
 // https://nodeapi.pyther.com/customer/serach/name/vivek

export const getCustomers = async () =>{
        return fetch(apiEndPoint, {
                    method: 'get',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                          }
                    })
                  .then(response => response.json())
                  .then(response => {
                    //console.log(JSON.stringify(response));
                    return response;
                }).catch(function(error) {
                  console.log(error);
              });
};

export const addCustomer = async (record) =>{
  return fetch(apiEndPoint, {
    method: 'post',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
          },
        body:JSON.stringify(record)
    })
  .then(response => response.json())
  .then(response => {
    //console.log(JSON.stringify(response));
    return response;
}).catch(function(error) {
  console.log(error);
});
}

export const updateCustomer = async (record) =>{
  return fetch(apiEndPoint, {
    method: 'put',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
          },
        body:JSON.stringify(record)
    })
  .then(response => response.json())
  .then(response => {
    //console.log(JSON.stringify(response));
    return response;
}).catch(function(error) {
  console.log(error);
});
}
export const deleteCustomer = async (id) =>{
  return fetch(apiEndPoint, {
    method: 'delete',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
          },
        body:JSON.stringify({id})
    })
  .then(response => response.json())
  .then(response => {
    //console.log(JSON.stringify(response));
    return response;
}).catch(function(error) {
  console.log(error);
});
}

export const getCustomerById = async (id) =>{
  return fetch(apiEndPoint + "/"+id, {
    method: 'get',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
          }
    })
  .then(response => response.json())
  .then(response => {
    //console.log(JSON.stringify(response));
    return response;
}).catch(function(error) {
  console.log(error);
});
}