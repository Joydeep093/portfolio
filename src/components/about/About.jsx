import React, { useState } from "react";
import "./about.css";
import myImage from "../../assets/me2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import {
  FaArrowDown,
  FaArrowUp,
  FaCertificate,
  FaHourglassHalf,
} from "react-icons/fa";

const About = () => {
  let [showMore, setShowMore] = useState(false);
  const startMonth = 3;
  const startYear = 2017;
  let totalExpYear = new Date().getFullYear() - startYear;
  let totalExpMonth;
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth < startMonth) {
    totalExpYear = totalExpYear - 1;
    totalExpMonth = 12 - (startMonth - currentMonth);
  } else {
    totalExpMonth = currentMonth - startMonth;
  }

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                B.Tech in <br />
                Electronics and Communication Engineering <br />
                <i>WBUT.</i>
              </small>
            </article>

            <article className="about__card">
              <FaHourglassHalf className="about__icon" />
              <h5>Total Experience</h5>
              <strong>
                {totalExpYear}.{totalExpMonth} Years
              </strong>
            </article>

            <article className="about__card">
              <FaCertificate className="about__icon" />
              <h5>Certifications</h5>
              <small>
                <ul>
                  <li>AWS Certified Developer - Associate</li>
                  <li>Power Platform App Maker Associate (PL-100) </li>
                  <li>Microsoft Power Platform Fundamentals (PL-900) </li>
                  <li>Azure Data Fundamentals (DP-900) </li>
                  <li>Deep Learning specialization form Coursera</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            With more than 6 years of professional experience in various
            domains, such as Angular, Javascript, Node Js,Express Js, React Js,
            PCF, and MS Powerapps, I am a Senior Analyst at Accenture Baltics,
            where I deliver innovative solutions for complex web applications. I
            have a Bachelor of Technology degree in Electronics and
            Communications Engineering from West Bengal University of
            Technology, which equipped me with a strong foundation in technical
            and analytical skills.
            <br />
            {!showMore ? (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowMore(true)}
              >
                <FaArrowDown style={{ "verticalAlign": "middle" }} /> &nbsp;
                read more...
              </span>
            ) : null}
            {showMore && (
              <p>
                I am passionate about learning new technologies and enhancing my
                knowledge of cloud and machine learning. I also have proficiency
                in REST APIs, ECMAScript, and Object-Oriented Programming. I am
                a motivated team player who excels in cross-organizational
                collaboration and communication. My goal is to leverage my
                skills and expertise to create value for my clients and
                contribute to organization's vision and mission.
              </p>
            )}
            {showMore && (
              <span style={{ cursor: "pointer" }} onClick={() => setShowMore(false)}>
                <FaArrowUp style={{ "verticalAlign": "middle" }} /> &nbsp; show
                less...
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
