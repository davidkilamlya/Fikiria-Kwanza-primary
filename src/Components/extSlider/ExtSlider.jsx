import React, { useEffect, useState } from "react";
import "./ExtSlider.scss";

import { images } from "../../Constants";

let sliderNum = [
  images.practical_lab,
  images.school_view,
  images.ladies_view,

  images.sports_view,
  images.fun_time,
  images.student_library,
];

function ExtSlider() {
  const [counterNumber, setCounterNumber] = useState(0);
  const [counterHolder, setCounterHolder] = useState(0);

  const counter = () => {
    if (counterNumber < sliderNum.length - 1) {
      setCounterNumber(counterNumber + 1);
      const firstSlider = sliderNum[counterNumber];
      sliderNum.push(firstSlider);
    } else {
      setCounterNumber(0);
      const firstSlider = sliderNum[0];
      sliderNum.push(firstSlider);
    }
    setCounterHolder(counterHolder + 1);
  };

  console.log(sliderNum, " counter holder ", counterHolder);
  useEffect(() => {
    const interval = setInterval(() => counter(), 4000);

    return () => clearInterval(interval);
  });
  console.log(counterNumber);
  return (
    <div
      className="extslider-container"
      style={{
        transform: `translateX(-${counterHolder * 100}%)`,
      }}
    >
      {sliderNum.map((item, index) => {
        return (
          <div className="slider-div" key={index}>
            <img className="slider-image" src={item} alt={item} />
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default ExtSlider;
