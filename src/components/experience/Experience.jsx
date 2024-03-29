import React from "react";
import "./Experience.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import accenture_logo from "../../assets/accenture_baltics_logo.jpg";
import pwc_logo from "../../assets/pwc_logo.png";
import dcg_logo from "../../assets/dcg_logo.png";

const Experience = () => {
  // const handleDialog = () => {
  //   const dialog = document.getElementById("acc_dialog");
  //   dialog.showModal();
  // };
  return (
    <section id="experience">
      <h5>Organizations I have worked</h5>
      <h2>Experience</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="exp__item-name">
            <aside className="exp__item-image">
              <img src={accenture_logo} alt="Accenture Baltics Logo" />
            </aside>
            <span>Accenture Baltics</span>
          </div>
          <p className="text-light">Senior Analyst</p>
          <small className="text-light">09/2023 - Present</small>
          <p className="text-light">
            <FaMapMarkerAlt style={{ verticalAlign: "middle" }} />{" "}
            <small>Vilnius, Lithuania</small>
          </p>
          {/* <div className="portfolio__item-cta">
            <dialog id="acc_dialog">Details</dialog>
            <p onClick={handleDialog}>Details</p>
          </div> */}
        </article>
        <article className="portfolio__item">
          <div className="exp__item-name">
            <aside className="exp__item-image">
              <img src={pwc_logo} alt="Accenture Baltics Logo" />
            </aside>
            <span>PricewaterhouseCoopers</span>
          </div>
          <p className="text-light">Manager</p>
          <small className="text-light">06/2019 - 09/2023</small>
          <p className="text-light">
            <FaMapMarkerAlt style={{ verticalAlign: "middle" }} />{" "}
            <small>Kolkata, India</small>
          </p>
          <div className="portfolio__item-cta">
            {/* <a
              href="https://github.com/Thakshila-Bandara/Beauty-Garden"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="exp__item-name">
            <aside className="exp__item-image" style={{ marginTop: "10px" }}>
              <img
                src={dcg_logo}
                alt="DCG Date Core Systems (India) Pvt. Ltd."
              />
            </aside>
            <span>DCG Data Core Systems (India) Pvt. Ltd.</span>
          </div>
          <p className="text-light">Software Engineer</p>
          <small className="text-light">03/2017 - 06/2019</small>
          <p className="text-light">
            <FaMapMarkerAlt style={{ verticalAlign: "middle" }} />{" "}
            <small>Kolkata, India</small>
          </p>
          <div className="portfolio__item-cta">
            {/* <a
              href="https://github.com/Thakshila-Bandara/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
