import React, { useEffect, useState } from "react";
import "../../Components/TodayQuote/TodayQuote.scss";
import Title from "../../Components/Title/Title";
import "./Testimonial.scss";
var testimonials = [
  {
    quote:
      "Fikiria Kwanza  has been a fantastic school for my child. The teachers are dedicated and supportive, and the academic programs are excellent.",
    name: "Alex Brown",
    role: "Parent",
  },
  {
    quote:
      "I'm grateful to be a student at Fikiria Kwanza . The teachers are passionate about their subjects and always encourage us to reach our full potential.",
    name: "Samantha Lee",
    role: "Student",
  },
  {
    quote:
      "As a parent, I've been impressed by the welcoming atmosphere at Fikiria Kwanza . The school values parent involvement and keeps us well-informed about our child's progress.",
    name: "David Miller",
    role: "Parent",
  },
  {
    quote:
      "Fikiria Kwanza  provides a diverse range of extracurricular activities. I've had the opportunity to explore my interests and develop new skills.",
    name: "Olivia Clark",
    role: "Student",
  },
  {
    quote:
      "The teachers at Fikiria Kwanza  are dedicated professionals who go above and beyond to support their students. I feel valued and supported in my learning journey.",
    name: "Ethan Wilson",
    role: "Student",
  },
];

function TodayQuote() {
  const [quote, setQuote] = useState(0);
  function getRandomNumber(min, max) {
    var random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    setQuote(random_number);
  }

  useEffect(() => {
    const interval = setInterval(
      () => getRandomNumber(1, testimonials.length - 1),
      100000
    );
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="testimonial" id="testimonial">
      <Title title={"Testimonial"} />
      <div className="testimonial-message-container">
        <p className="testimonial-message">"{testimonials[quote].quote}"</p>
        <div className="testimonial-name-container">
          <span className="name-test">-{testimonials[quote].name}</span>
        </div>
      </div>
    </div>
  );
}

export default TodayQuote;
