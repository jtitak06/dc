import React from "react";
import Logo from "../images/Drive-Chicago-Logo.png"
import "./ForgotPassword.css";

export default function ForgotPassword() {
    return(
        <>
            <div className="forgot-password-page">
                <h1 className="forgot-password-title">Forgot Your Password?</h1>
                <div className="forgot-password-box">
                    <h3 className="forgot-password-subtitle">Type in your e-mail address below and we will send you a link to reset your password.</h3>
                    <div className="forgot-password-input-wrapper">
                        <input className="forgot-password-input" placeholder="Enter e-mail address..." />
                    </div>
                    <div className="forgot-password-button-wrapper">
                        <button className="forgot-password-button">Reset Password</button>
                    </div>
                </div>
                <div className="forgot-password-logo-wrapper">
                    <img className="forgot-password-logo" src={Logo} alt="Logo" />
                </div>
            </div>
        </>
    )
}