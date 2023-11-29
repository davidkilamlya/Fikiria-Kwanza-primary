import React, { useState } from "react";
import { images } from "../../Constants";
import "./QuickImage.scss";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const quickImage = [
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0014.jpg?updatedAt=1701188101703",
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0067.jpg?updatedAt=1701187499485",
  "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0022.jpg?updatedAt=1701187230044",
];

function QuickImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = (e) => {
    setCurrentSlide((prev) => prev + 1);
  };
  const handleForward = (e) => {
    setCurrentSlide((prev) => prev - 1);
  };
  return (
    <div className="quick-image">
      <div className="quick-image-title">
        <p className="quick-image-title-title">
          We are the<span className="quick-image-title-focus"> Excellence </span>, and we are the {" "}
          <span className="quick-image-title-focus">Best</span>
        </p>
      </div>
      <div className="arrow-back">
        <IoMdArrowBack onClick={(e) => handleBack(e)} />
      </div>

      <div className="quick-image-container">
        {quickImage.map((image, index) => {
          return (
            <div
              className="quick-image-div"
              key={index}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              // ref={(ref)=>ref=quickDivRef.current[0]}
            >
              <img src={image} alt={image} className="quick-image-image" />
            </div>
          );
        })}
      </div>
      <div className="arrow-forward" onClick={() => handleForward()}>
        <IoMdArrowForward />
      </div>
    </div>
  );
}

export default QuickImage;
