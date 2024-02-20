import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me-new-removebg.png";
import HeaderSocials from "./HeaderSocials";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import resumeIcon from "../../assets/download_cv_icon_dark.png"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const handleThemeToggle = (e) => {
    if (!checkboxValue) {
      setCheckboxValue(true);
    } else {
      setCheckboxValue(false);
    }
    toggleTheme();
  };

  useEffect(() => {
    const resetCheckbox = () => {
      if (theme === "dark-theme") {
        setCheckboxValue(true);
      } else {
        setCheckboxValue(false);
      }
    };

    resetCheckbox();
  }, [theme]);

  return (
    <header id="home">
      <div className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true"></i>
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            value={checkboxValue}
            onChange={handleThemeToggle}
            checked={checkboxValue}
          />
          <label
            htmlFor="color_mode"
            data-on=""
            data-off=""
            className="btn-color-mode-switch-inner"
          ></label>
        </label>
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      </div>
      <div className="container header__container">
        {/* <h5>Hello, I'm</h5> */}
        <h1>Joydeep Roy</h1>
        <h3 className="text-light">
          {" "}
          <a href="https://www.google.com/search?q=mean+stack" target="_blank" rel="noreferrer">
            MEAN
          </a>{" "}
          /{" "}
          <a href="https://www.google.com/search?q=mern+stack" target="_blank" rel="noreferrer">
            MERN
          </a>{" "}
          Stack Developer
        </h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a className="scroll__down" title="Download Resume">
          <img className="download-resume" src={resumeIcon} alt="Download Resume" />
        </a>
      </div>
    </header>
  );
};

export default Header;
