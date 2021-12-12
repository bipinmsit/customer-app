import React from 'react';
import { useNavigate } from "react-router-dom"; //singleton

   function Login() {
      const navigate = useNavigate();
      return (
         <div>
            <h2>Login</h2>
            <input placeholder="Username" /> <br/> <br/>
            <input type="password" placeholder="Password" /> <br/> <br/>
            <input type="button" onClick={()=>{navigate('/customer')}} value="Login" />
         </div>
      );
   }
    export default Login;