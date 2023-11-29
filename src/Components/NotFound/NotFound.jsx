import React, { useState } from "react";
import { images } from "../../Constants";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import PageHeader from "../PageHeader/PageHeader";

function NotFound() {
  return (
    <>
      <Contact position={"sticky"} />
      <PageHeader />
      <div className="notfound">
        {/* <div className="notfound-logo">
        <img src={images.logo} alt="goodwill_logo" />
      </div> */}
        <div className="notfound-image">
          <img
            src={images.notfound}
            className="notfound-image-svg"
            alt="notfound"
          />
        </div>
        <div className="notfound-message">
          <h3>
            Uh-oh&#x1F92D;! Sorry the page you're looking for is not available at the moment.
          </h3>
          <b>
            back to{" "}
            <Link className="notfound-a" to={"/"}>
              home page
            </Link>
          </b>
        </div>
      </div>
    </>
  );
}

export default NotFound;
