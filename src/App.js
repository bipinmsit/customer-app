import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import PageNotFound from './containers/PageNotFound';
import CustomerApp from './containers/Customers';
import AddCustomer from './containers/AddCustomer';

const App = () => {
   return (
     <Router>
      <div style={{margin:'10px'}}>
       <h2> Customer App</h2>
         <Routes>
           <Route exact path="/" element={<Navigate to={{pathname: "/login" }}/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path="/home" element={<Home/>}/>
           <Route exact path="/customer" element={<CustomerApp/>}/>
           <Route exact path="/customer/add" element={<AddCustomer/>}/>
           <Route exact path="/customer/edit/:customerId" element={<AddCustomer/>}/>
           <Route path="*" element={<PageNotFound/>}/>
         </Routes>
      </div>
     </Router>
   );
 }
export default App;