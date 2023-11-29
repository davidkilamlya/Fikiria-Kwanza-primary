import React from "react";
import "./Home.scss";
import { NavBar } from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";


import ExtraNav from "../../Components/NavBar/ExtraNav";
import About from "../About/About";
import Academics from "../Academics/Academics";


import ContactUs from "../Contactus/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Location from "../../Components/Location/Location";
import Contact from "../../Components/Contact/Contact";

import Calender from "../../Components/Resources/ResourcesPages/Calender/Calender";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";

import QuickLink from "../../Components/QuickLink/QuickLink";
import Copyright from "../../Components/Copyright/Copyright";
import QuickImage from "../../Components/QuickImage/QuickImage";
import QuickText from "../../Components/QuickImage/QickText";

function Home() {
  return (
    <div className="Home" id="home">
      <Contact position={"sticky"} IconColor={"#fff"} backgroundColor={"#062888"}/>

      <NavBar />
      {/* <AnnouncementBanner /> */}
      <Slider />
      <Whatsapp />
      {/* <QuickLink /> */}
      <ExtraNav />
      <QuickImage />
      {/* <TodayQuote /> */}
      <About />
      <QuickText />
      <Academics />
      <Calender />
      {/* <Admission /> */}
      <Location />
      <ContactUs />
      {/* <NumCount /> */}
      {/* <Testimonial /> */}
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
