import React from "react";
import "./Contact.scss";

import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

function Contact({ IconColor, position, backgroundColor }) {
  return (
    <div
      className="contact"
      style={{ position: position, backgroundColor: backgroundColor }}
    >
      <div className="container">
        

        <div className="contact-phone-email contact-social">
          <a href="tel:255784679000" className="call">
           <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><PiPhoneCallFill className="icon" style={{ color: IconColor }} /></div> 
           <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><span className="contact-details" style={{ color: IconColor }}>0784679000</span></div> 
          </a>
          <a href="mailto:primary@fikiriakwanza.ac.tz" className="call">
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}> <MdEmail className="icon" style={{ color: IconColor }} /></div>
          <div style={{display:"flex", alignItems:"center",width:"100%",height:"100%", justifyContent:"center"}}> <span className="contact-details" style={{ color: IconColor }}>primary@fikiriakwanza.ac.tz</span></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
