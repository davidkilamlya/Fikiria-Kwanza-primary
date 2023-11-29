import React from "react";
import "./AdmissionPage.scss";

import Footer from "../../Components/Footer/Footer";

import Contact from "../../Components/Contact/Contact";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
import { documents } from "../../Constants";

function AdmissionPage() {
  return (
    <>
      <Helmet>
        <title>Fikiria Kwanza Primary School: A Comprehensive Curriculum for Diverse Learners</title>
        <meta
          name="description"
          content="Explore our comprehensive curriculum designed to foster a love of learning, nurture curiosity, and empower students for future success. Discover a world of knowledge at Fikiria Kwanza Primary School."
        />
        <meta name="author" content="David Kilamlya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="primary school, Tanzania, curriculum, subjects, English, Mathematics, Kiswahili, Science, Social Studies, Civic and Moral Education, Vocational Skills, Physical Education"
        />
         <meta
          property="og:title"
          content=" Fikiria Kwanza Primary School: A Comprehensive Curriculum for Diverse Learners"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive curriculum designed to foster a love of learning, nurture curiosity, and empower students for future success. Discover a world of knowledge at Fikiria Kwanza Primary School."
        />
        <meta property="og:image" content="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0041.jpg?updatedAt=1701187317196" />
<meta property="og:type" content="website" />

        <link rel="canonical" href="/admission" />
      </Helmet>
      <div className="Admission-page-holder">
        <Contact position={"sticky"} />
        <PageHeader title={"Fikiria Kwanza/Admission"} />

        <div className="admissionPage">
          <div className="admissionPage-container">
            <div className="admission-page-title">
              <h1 className="admission-page-title-h1">
                Apply <span className="title-focus">now</span> for
              </h1>
              <h1 className="title-focus">2022/2023</h1>
            </div>
          </div>
          <div className="admission-form">
            <label className="label" htmlFor="name">
              <span>First name:</span> <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>Last name:</span>
              <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>Email address: </span> <input type="text" />
            </label>
            <label className="label" htmlFor="name">
              <span>
                {`Upload field registration form, download `}
                <a href={documents.registration} className="quick-red">
                   here
                </a>
                 {` if you don't have`}
              </span>{" "}
              <input type="file" />
            </label>
            <button className="admission-button">Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdmissionPage;
