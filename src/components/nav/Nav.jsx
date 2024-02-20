import React, { useContext, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { ThemeContext } from "../context/theme-context";

const Nav = () => {
  const { theme, toggleTheme, scrollToBottom} = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("#");
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleThemeToggle = (e) => {
    if (!toggleIcon) {
      setToggleIcon(true);
    } else {
      setToggleIcon(false);
    }
    toggleTheme();
    setActiveNav("Theme");
  };

  useEffect(() => {
    const resetToggleIcon = () => {
      if (theme === "dark-theme") {
        setToggleIcon(true);
      } else {
        setToggleIcon(false);
      }
    };

    resetToggleIcon();
  }, [theme]);

  return (
    <nav className={scrollToBottom ? "hide-nav":""}>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GoChecklist />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      {!toggleIcon && (
        <div
          className={activeNav === "Theme" ? "active" : ""}
          style={{cursor:'pointer'}}
          onClick={() => handleThemeToggle()}
        >
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </div>
      )}
      {toggleIcon && (
        <div
          className={activeNav === "Theme" ? "active" : ""}
          style={{cursor:'pointer'}}
          onClick={() => handleThemeToggle()}
        >
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </div>
      )}
    </nav>
  );
};

export default Nav;
