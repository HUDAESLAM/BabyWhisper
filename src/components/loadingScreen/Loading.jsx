import React from "react";
import "./Loading.css";
import Cloudbg from "../../assets/Cloudbg.jpg";
import Logo from "../../assets/Logo.png";

export default function LoadingScreen() {
  return (
    <div className="loading-overlay">
      <div className="loading-background">
        <img src={Cloudbg} alt="Background" />
      </div>
      <div className="loading-content">
          <img src={Logo} alt="Logo" className="logo-img mb-2" />
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
