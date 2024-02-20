import React, { useContext, useEffect, useRef } from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ThemeContext } from "../context/theme-context";

const Footer = () => {
  const { toggleNav } = useContext(ThemeContext);
  const year = new Date().getFullYear();
  const ref = useRef();
  const handleScroll = () => {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    ) {
      toggleNav(true);
    } else {
      toggleNav(false);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer ref={ref}>
      <div className="footer__logo__socials">
        <a href="#home" className="footer__logo">
          Joydeep
        </a>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/joydeep-roy-42514875"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Joydeep093"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          {/* <a href="https://medium.com/@thakshiladb2000"><BsMedium/></a> */}
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; {year} Joydeep Roy. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
