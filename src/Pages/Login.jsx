import React from "react";
import "../componens/Buyacar.css";

const Login = () => {
  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Login</h1>
        <form className="form" action="">
          <input
            type="usesrname "
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <br />
          <br />
          <button style={{width: '100%', height: '3rem', textAlign: 'center'}} >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
