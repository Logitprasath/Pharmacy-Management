import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  function fun()
  {
    alert("Login Successful!!!")
  }
 

  return (
    <div>
      
      <h2>PHARMACY MANAGEMENT</h2>
      <form className="login-form" >
        <h2>Login</h2>
        <label htmlFor="username">Email:</label>
        <input type="text" placeholder="Email" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" id="password" name="password" required />

        <div>
          <button type="submit" onClick={fun}>Login</button>
          <br />
          <p>Create new Account? &nbsp;
          <Link to="/Signup" className="last">Register</Link>
          </p>
          </div>
      </form>
    </div>
  );
}

export default Login;
