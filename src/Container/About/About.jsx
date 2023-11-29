import React, { useEffect, useState } from "react";
import "./About.scss";


import Title from "../../Components/Title/Title";

export default function About() {
  const [image, setimage] = useState([]);
  useEffect(() => {
    if (window.screen.availWidth < 601) {
      setimage(["https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0027.jpg?updatedAt=1701187225325"]);
    } else {
      setimage(["https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0027.jpg?updatedAt=1701187225325", "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0048.jpg?updatedAt=1701187364405"]);
    }
  }, []);
  return (
    <div className="About" id="about_us">
      <div className="about-container">
        <Title title={"About Fikiria kwanza Primary School"} visible/>

        <div className="about-description">
          <div className="about-description-details">
            <p className="about-paragraph">
            Fikiria Kwanza Primary School is a reputable educational institution renowned for providing a comprehensive and balanced education to students in the region. Founded with the vision of nurturing academic excellence and holistic development, Fikiria Kwanza Primary School offers a diverse curriculum encompassing English, Mathematics, Kiswahili, Science, Social Studies, Civic and Moral Education, Vocational Skills, and Physical Education, ensuring that students gain a well-rounded education that prepares them for future success.
            </p>
            <p className="about-paragraph">
            Catering to the diverse interests and aspirations of its students, Fikiria Kwanza Primary School offers a range of extracurricular activities, including sports, music, and drama, providing students with opportunities to explore their talents and passions. In addition to its academic rigor and extracurricular offerings, Fikiria Kwanza Primary School is committed to fostering a nurturing and supportive learning environment where students feel valued and respected.
            </p>
            <p className="about-paragraph">
            To accommodate the needs of its diverse student body, Fikiria Kwanza Primary School offers both boarding and day scholar options. The school's modern and well-maintained hostels provide comfortable and secure accommodations for boarding students, while the day scholar program offers a flexible and convenient option for students who prefer to commute from home.

            With its commitment to academic excellence, holistic development, and a caring learning environment, Fikiria Kwanza Primary School stands out as a premier educational institution in Tanzania.
            </p>
          </div>

          <div className="about-images-container">
            {image.map((item, index) => {
              return (
                <div className="about-images" key={index}>
                  <img src={item} alt={item} className="about-image" />
                </div>
              );
            })}
          </div>
        </div>
        {/* <button className="about-us-button">
          <a href="/about">Read More</a>
        </button> */}
      </div>
    </div>
  );
}
