import React, { useEffect, useState } from "react";
import "./Slider.scss";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { images } from "../../Constants";

function Slider() {
  const image = [
    {
      title: "We empowering young minds to shape the future.",
      link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0008.jpg",
    },
    {
      title: " We nurturing potential, igniting passion, and inspiring dreams.",
      link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0036.jpg",
    },
    {
      title: "We cultivating a love of learning that lasts a lifetime.",
      link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0039.jpg",
    },
    {
      title: "Discover the limitless possibilities that await you here.",
      link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Primary/JOH_0030.jpg",
    },
    // {
    //   title: "Join our vibrant community of learners and educators.",
    //   link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/_AX_1989.jpg?updatedAt=1695572897209",
    // },
    // {
    //   title:
    //     "Fikiria Kwanza secondary is where every student is valued and respected.",
    //   link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/Graduration_2023/IMG_6644.jpg?updatedAt=1701011195769",
    // },
    // {
    //   title: "We preparing you for success in a rapidly changing world.",
    //   link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/_AX_1999.jpg?updatedAt=1695572904788",
    // },
    // {
    //   title: "Your journey to excellence starts here.",
    //   link: "https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/_AX_1893.jpg?updatedAt=1695572860074",
    // },
  ];
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].pageX);
  };

  const handleTouchEnd = (event) => {
    const touchEnd = event.nativeEvent.changedTouches[0].pageX;
    const touchDifference = touchStart - touchEnd;

    if (touchDifference > 0) {
      handleNextSlide();
    } else if (touchDifference < 0) {
      handlePrevSlide();
    }
  };

  const handleNextSlide = () => {
    console.log(CurrentSlide);
    setCurrentSlide((prevSlide) =>
      prevSlide === image.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? image.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slider-container">
      

      <div
        className="sliders-wrapper"
        style={{ transform: `translateX(-${CurrentSlide * 100}%)` }}
      >
        {image.map((image, index) => {
          return (
            <div key={`image-${index}`} className="slider-wrapper">
              {/* <div className="decor">hello</div> */}
              <div
                className="transparent-cover"
                // style={{
                //   backgroundColor: "AppWorkspace",
                //   backgroundImage: `url(${image.link})`,
                //   backgroundRepeat: "no-repeat",
                //   backgroundPosition: "center",
                //   backgroundSize: "cover",
                // }}
              ></div>
              <div className="trans-cover">
                <img
                  src={image.link}
                  alt={`slider-${index}`}
                  className="slider"
                />
                <div className="message-layer">
                  <h1>{image.title}</h1>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="controlers">
        <div
          className="prev-slide"
          onClick={() => {
            handlePrevSlide();
          }}
        >
          <MdArrowBackIosNew />
        </div>
        <div
          className="next-slide"
          onClick={() => {
            handleNextSlide();
          }}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

export default Slider;
