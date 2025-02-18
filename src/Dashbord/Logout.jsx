import React from "react";
import "./dashbord_styles/logout.css";

const Logout= () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <p>New user? <a href="/signup">Create an Account</a></p>
        
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button className="signin-button">Sign In</button>

        <div className="divider">OR</div>

        <div className="social-login">
          <button className="social-button">Facebook</button>
          <button className="social-button">LinkedIn</button>
          <button className="social-button">Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
