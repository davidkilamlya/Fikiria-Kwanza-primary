import React from "react";
import "./ExtraNav.scss";

function ExtraNav() {
  const extraNav = [
    {
      title: "Apply Now",
      link: "/admission",
    },
    {
      title: "News and Updates",
      link: "/updates",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "academics",
      link: "/academics",
    },
    // {
    //   title: "Co-curricular",
    //   link: "/curricular",
    // },
    // {
    //   title: "Student Life",
    //   link: "/life",
    // },
  ];

  return (
    <div className="extraNav">
      <div className="extraNav-container">
        {extraNav.map((item, index) => {
          return (
            <div className="extraNav-nav" key={index}>
              <a href={item.link} className="extraNav-nav-link">
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtraNav;
