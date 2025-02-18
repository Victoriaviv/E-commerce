import React, { useState } from "react";
import "./dashbord_styles/setting.css";

const Setting = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [passwordChangeReminder, setPasswordChangeReminder] = useState(false);

  return (
    <div className="settings-container">
      <h2>Change your password</h2>
      
      <label>Current Password</label>
      <input type="password" placeholder="Current Password" className="input-field" />

      <label>New Password</label>
      <input type="password" placeholder="New Password" className="input-field" />
      
      <h3>Security preferences</h3>

      <div className="security-option">
        <div>
          <strong>Enable 2-step authentication</strong>
          <p>Protects you against password theft by requesting an authentication code via SMS on every login.</p>
        </div>
        <label className="switch">
          <input type="checkbox" checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} />
          <span className="slider round"></span>
        </label>
      </div>
      
      <div className="security-option">
        <div>
          <strong>Ask to change password on every 6 months</strong>
          <p>A simple but an effective way to be protected against data leaks and password theft.</p>
        </div>
        <label className="switch">
          <input type="checkbox" checked={passwordChangeReminder} onChange={() => setPasswordChangeReminder(!passwordChangeReminder)} />
          <span className="slider round"></span>
        </label>
      </div>
      
      <button className="save-button">Save</button>
    </div>
  );
};

export default Setting;
