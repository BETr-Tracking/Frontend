import React from "react";
import "../css/auth.css"
import authbg from "../../../assets/auth-background.png"

const AuthBase = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-image-container">
        <div className="auth-image">
            <img src={authbg} alt=""/>
        </div>
        <div className="auth-image-tag">Get Structured Financial Data</div>
      </div>
      <div className="auth-form-container">{children}</div>
    </div>
  );
};

export default AuthBase;
