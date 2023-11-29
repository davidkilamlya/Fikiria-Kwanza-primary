import React, { useEffect, useRef, useState } from "react";
import "../Resources/Resources.scss";
import "./ResourceListNav.scss"
import { Link, useLocation } from "react-router-dom";
// import HandBook from "../Resources/ResourcesPages/Handbook/HandBook";

const ResourceListNav = ({ resourcesData, updateInitial }) => {
  const activeRef = useRef([]);
  const [initialIndex, setInitialIndex] = useState(null);
  const [prevActiveResource, setPrevActiveResource] = useState();
  const { pathname, search } = useLocation();

  let path = pathname.split("/").filter((path) => path !== "");

  const handleActive = (event) => {
    setPrevActiveResource(event.target);
    updateInitial(false);
    if (prevActiveResource !== event.target) {
      if (prevActiveResource !== undefined) {
        prevActiveResource.style.color = "#333";
        prevActiveResource.style.backgroundColor = "";
      }
    }

    event.target.style.color = "blue";
    event.target.style.backgroundColor = "#f1f3f8";
  };

  const setActiveStyle = () => {
    // let navtocheck = resourcesData.filter((item) => {
    //   return item.link === path[path.length - 1];
    // });

    resourcesData.map((item, index) => {
      if (item.link === path[path.length - 1]) {
        setInitialIndex(index);

        setPrevActiveResource(activeRef.current[index]);
        activeRef.current[index].style.color = "blue";
        activeRef.current[index].style.backgroundColor = "#f1f3f8";

        return index;
      }
      return 0;
    });
  };

  useEffect(() => {
    return () => {
      setActiveStyle();
    };
  }, []);

  return (
    <div>
      <div className="resources-container-nav">
        {resourcesData.map((nav, index) => {
          return (
            <Link to={nav.link}>
              <div className="resources-container-nav-container" key={index}>
                <div
                  onClick={(event) => handleActive(event, index)}
                  ref={(ref) => (activeRef.current[index] = ref)}
                  className="resources-container-nav-resource"
                >
                  <span className="resources-container-nav-resource-title">
                    {nav.title}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceListNav;
