import React from "react";
import "./Admission.scss";
import images from "../../Constants/images";
import { Helmet } from "react-helmet-async";

function Admission() {
  return (
    <div className="admission" id="admission">
      <div className="admission-container">
        <div className="admission-container-description-div">
          <h2 className="admission-title">Apply now for 2023/2024</h2>
          <div className="admission-container-description">
            <div className="list-container">
              <ul className="admission-description-instruction">
                <div className="list-div">
                  <li className="admission-description-instruction-list">
                    Apply online and submit required documents.
                  </li>
                  {/* <div className="border-bottom"></div> */}
                </div>
                <div className="list-div">
                  <li className="admission-description-instruction-list">
                    Complete an entrance examination and interview.
                  </li>
                  {/* <div className="border-bottom"></div> */}
                </div>
                <div className="list-div">
                  <li className="admission-description-instruction-list">
                    Receive acceptance notification upon evaluation.
                  </li>
                </div>
              </ul>
              <div className="">
                <a href="/admission" className="list-button-link">
                  <button className="list-button">Apply Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
