// Location.js

import React from "react";
import "./Location.scss";

const Location = () => {
  return (
    <section className="location" id="location">
      <div className="location-container">
        <h2>School Location</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8891913356756!2d36.837521974931555!3d-3.377250441486597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183711c6bc8c4997%3A0xee85fc275bf3ed87!2sFikiria%20Kwanza%20Academy!5e0!3m2!1sen!2stz!4v1701010744179!5m2!1sen!2stz"
            width="600"
            height="450"
            allowfullscreen
            loading="lazy"
            title="Fikiria Kwanza Academy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <address className="address">
          <p>Usariver,Leganga,Arusha</p>
          {/* <p>P.O. Box 23124 Arusha</p> */}
        </address>
      </div>
    </section>
  );
};

export default Location;
