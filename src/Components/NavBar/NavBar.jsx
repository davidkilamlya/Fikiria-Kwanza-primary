import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../Constants";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";

export const NavBar = () => {
  const navList = [
    { name: "Home", link: "home" },
    { name: "about us", link: "about_us" },
    { name: "Academics", link: "academics" },
    { name: "Admission", link: "admission" },
    // { name: "Testimonial", link: "testimonial" },
    { name: "Contact us", link: "contact" },
    { name: "Location", link: "location" },

    // { name: "FAQ", link: "faq" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="NavBar">
      <div className="navbar_logo">
        <img
          className="logo"
          src="https://ik.imagekit.io/fa4kq1qqo/Fikiria_Kwanza_Academy/Assets/logo.png?updatedAt=1701005864724"
          alt="Fikiria-kwanza-academy-logo"
        />
      </div>
      <ul className="navbar_list">
        {navList.map((item, index) => (
          <li className="navbar_list_item" key={`link-${item}`}>
            <div />
            <a href={`/#${item.link}`}> {item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 100, 0, 100, 0] }}
              transition={{ duration: 0.85, ease: "backInOut" }}
              exit={{ opacity: 0 }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {navList.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.link}`} onClick={() => setToggle(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
