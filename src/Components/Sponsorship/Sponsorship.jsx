import React, { useState } from "react";
import "./Sponsorship.scss";
import InputFormTemplate from "../../Components/InputFormTemplate/InputFormTemplate"
import { Helmet } from "react-helmet-async";

import HeaderContact from "../../Components/Contact/Contact";
// import Contact from "../../Components/Contact/Contact";

import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";

function Sponsorship() {
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    "Full name": "",
    Nationality: "",
    "Birth date": "",
    "Region of origin": "",
    Gender: "",
    Address: "",
    "Parent/Guardian's Phone": "",
    "Parent/Guardian's Email": "",
    "Talented skills": "",
    "Any disability": "",
    "Any health": "",
    "Health problem": "",
    "Primary school": "",
    "Primary school Graduation": "",
    "Secondary school": "",
    "Secondary school Graduation": "",
    disability: "",
  };

  // const [disability, setDisability] = useState("yes");
  // const [health, setHealth] = useState("yes");
  const genderStatus = [
    {
      radioName: "Gender",
      value: "male",
      label: "male",
    },
    {
      radioName: "Gender",
      value: "female",
      label: "female",
    },
    // {
    //   radioName: "Gender status",
    //   value: "divorced",
    //   label: "Divorced",
    // },
  ];

  const [inputStates, setInputStates] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log("typing....", e.target.name, inputStates);
  };
  const radioOptionalChange = (e) => {
    const { name, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log("typing....", e.target.name, inputStates);
  };
  const handleFormSponsorshipSubmit = async (e) => {
    setIsLoading(true);
    console.log(inputStates);
    const config = {
      headers: {
        Authorization: `Bearer `,
      },
    };
    const axiosInstance = axios.create(config);

    try {
      await axiosInstance.get("https://mail.busteki.co.tz/admission").then((res) => {
        console.log(res.data);
        setIsLoading(false);
        toast.error(`somethingg went wrong, contact primary@fikiriakwanza.ac.tz or call us +255 784679000`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
    } catch (err) {
      toast.error(`something went wrong, contact primary@fikiriakwanza.ac.tz or call us +255 784679000`, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.log(err.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* <PageHeader/> */}
      <Helmet>
        <title> Fikiria Kwanza Primary School: Nurturing Excellence, Shaping Futures</title>
        <meta
          name="description"
          content="Discover a premier educational institution dedicated to academic excellence, holistic development, and a caring learning environment. Enroll your child at Fikiria Kwanza Primary School today."
        />
        <meta name="author" content="David Kilamlya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="primary school, Tanzania,Arusha, admissions, education, excellence, holistic development, learning environment, boarding, day scholar"
        />
        <meta property="og:image" content="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0041.jpg?updatedAt=1701187317196" />
<meta property="og:type" content="website" />

        <link rel="canonical" href="/admission" />
      </Helmet>
      <HeaderContact position={"sticky"} />
      <div className="sponsorship">
        <div className="sponsorship-container">
          <div className="apply_logo_div">
            <img
              src="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/logo.png?updatedAt=1701005864724"
              alt="Fikiria-kwanza-academy-logo"
            />
          </div>
          {/* <div className="header-banner">
            <img
              src="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/_AX_1910.jpg?updatedAt=1695572865679"
              alt="sponsorship-banner"
            />
          </div> */}
          <InputFormTemplate header={true} />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Full name"]}
            placeholder={"David Kilamlya"}
            onChange={(e) => handleInputChange(e)}
            name={"Full name"}
            inputTitle={"Full name"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Nationality"]}
            placeholder={"Tanzania"}
            inputTitle={"Nationality"}
            onChange={(e) => handleInputChange(e)}
            name={"Nationality"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Region of origin"]}
            placeholder={"Region of origin"}
            inputTitle={"Region of origin"}
            onChange={(e) => handleInputChange(e)}
            name={"Region of origin"}
          />
          <InputFormTemplate
            dateInput={true}
            value={inputStates["Birth date"]}
            inputTitle={"Birth date"}
            onChange={(e) => handleInputChange(e)}
            name={"Birth date"}
          />
          <InputFormTemplate
            radio={true}
            radioName={"Gender"}
            radioData={genderStatus}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Gender"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates.Address}
            placeholder={"1012,Nyegezi, Mwanza"}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Address"}
            name={"Address"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Parent/Guardian's Phone"]}
            placeholder={"0123456789"}
            inputTitle={"Parent/Guardian's Phone"}
            onChange={(e) => handleInputChange(e)}
            name={"Parent/Guardian's Phone"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Parent/Guardian's Email"]}
            placeholder={"example@domain.com"}
            inputTitle={"Parent/Guardian's Email"}
            onChange={(e) => handleInputChange(e)}
            name={"Parent/Guardian's Email"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Talented skills"]}
            placeholder={"artist"}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Talented skills"}
            name={"Talented skills"}
          />
          <InputFormTemplate
            radioData={[
              {
                radioName: "disability",
                value: "yes",
                label: "Yes",
              },
              {
                radioName: "disability",
                value: "no",
                label: "No",
              },
            ]}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Any disability"}
            radio={true}
            // props for optional values if it is yes
            radioOptionalChange={(e) => radioOptionalChange(e)}
            optionalValue={inputStates["Any disability"]}
            name={"Any disability"}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={inputStates["disability"]}
          />

          <InputFormTemplate
            radio={true}
            radioData={[
              {
                radioName: "Health problem",
                value: "yes",
                label: "Yes",
              },
              {
                radioName: "Health problem",
                value: "no",
                label: "No",
              },
            ]}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Health problem"}
            radioOptionalChange={(e) => radioOptionalChange(e)}
            optionalValue={inputStates["Any health"]}
            name={"Any health"}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={inputStates["Health problem"]}
          />
         

          <div className="sponsorship-submit-button-container submit-button">
            <button
              disabled={isLoading ? true : false}
              style={
                isLoading ? { backgroundColor: "#ddd", color: "#333" } : {}
              }
              onClick={() => handleFormSponsorshipSubmit()}
            >
              {isLoading ? (
                <>
                  <div className="btn-loader"></div>
                  <span>Processing</span>
                </>
              ) : (
                <span>Apply</span>
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sponsorship;
