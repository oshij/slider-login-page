import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="login-form">
      <h1>Create account</h1><br></br>
      
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div><br></br>
        <button type="submit" className="btn btn-dark">
          Sign up
        </button>
        <p><br></br>Already have an account? <a href='LoginPage.js'>Log in here</a> </p>
        
      </form>
    </div>
  );
};

export default Login;
