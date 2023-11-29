import React from 'react'
import "./PageHeader.scss"
// import Title from '../Title/Title';
import BreadCrumbs from "../BreadCumbs/BreadCrumbs";

function PageHeader({title}) {
  return (
    <div className="gallery-image-banner" >
      <div className="breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="gallery-title">
        {/* <Title title={title}  /> */}
        <h1  style={{color:"#ffffff"}}>Gallery</h1>
      </div>
    </div>
  );
}

export default PageHeader