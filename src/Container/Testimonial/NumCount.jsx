import React, { useEffect, useRef, useState } from "react";
import "./NumCount.scss";
import { speedCounter } from "../../Constants";
import { IoIosPeople } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { easeInOut, motion } from "framer-motion";
import { LiaUsersSolid } from "react-icons/lia";

function NumCount() {
  const counterRef = useRef(null);
  const [studentCount, setStudentCount] = useState(800);
  const [facultyCount, setFacultyCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(390);
  const [inView, setInView] = useState(false);

  const countData = [
    {
      icon: <BsPeopleFill className="counterIcon-image" />,
      title: "Students",
      count: studentCount,
    },
    {
      icon: <LiaUsersSolid className="counterIcon-image" />,
      title: "Visitors",
      count: visitorCount,
    },
    {
      icon: <ImBooks className="counterIcon-image" />,
      title: "Faculties",
      count: facultyCount,
    },
  ];
  useEffect(() => {
    speedCounter(setInView, counterRef);
    if (studentCount < 800) {
      if (inView) {
        setTimeout(
          () => setStudentCount((prev) => prev + 1),

          10
        );
      }
    }
    if (facultyCount < 5) {
      if (inView) {
        setTimeout(() => setFacultyCount((prev) => prev + 1), 10);
      }
    }

    if (visitorCount < 390) {
      if (inView) {
        setTimeout(() => setVisitorCount((prev) => prev + 1), 10);
      }
    }
  });

  return (
    <div className="numcount-container">
      <div className="numcount" ref={counterRef}>
        {countData.map((item, index) => {
          return (
            <div>
              <div className="counterIcon">{item.icon}</div>

              <div className="studentCount">
                <h3 className="count">{item.count}</h3>
              </div>
              <div className="counter-title">
                <h3 className="counter-title-h1">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NumCount;
