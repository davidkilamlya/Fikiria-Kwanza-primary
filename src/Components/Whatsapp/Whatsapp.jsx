import React from "react";
import "./Whatsapp.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Whatsapp() {
  return (
    <div className="whatsapp">
      <span className="whatsapp-text">have a problem? click me</span>
      <div>
        <a href="https://api.whatsapp.com/send?phone=255784679000&text=hello I want to do registration?">
          <AiOutlineWhatsApp />
        </a>
        <div className="whatsapp-alert-red"></div>
      </div>
    </div>
  );
}

export default Whatsapp;
