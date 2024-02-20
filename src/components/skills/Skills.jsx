import React, { useState } from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp
} from "react-icons/fa";

const Skills = () => {
  let [showMoreFE, setShowMoreFE] = useState(false);
  let [showMoreBE, setShowMoreBE] = useState(false);
  let [showMoreOS, setShowMoreOS] = useState(false);
  return (
    <section id="skills">
      <h5>The skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        <div id="skill__frontend">
          <h3>Frontend</h3>

          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Angular</h4>
                {/* <small className='text-light'>Experienced</small> */}
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.5 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Javascript</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.5 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.2 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Typescript</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.5 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.2 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>React Js</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.5 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.5 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            {!showMoreFE && (
              <div
                className="show_more_skill"
                title="Show More"
                onClick={() => setShowMoreFE(true)}
              >
                <FaArrowAltCircleDown />
              </div>
            )}
            {showMoreFE && (
              <>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>HTML</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.2 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>CSS</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.5 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Bootstrap</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.5 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.2 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Tailwind CSS</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.2 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.2 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Svelte</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                {showMoreBE && (
                  <div
                    className="show_more_skill"
                    title="Show Less"
                    onClick={() => setShowMoreFE(false)}
                  >
                    <FaArrowAltCircleUp />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* End of FE skills */}

        <div id="skill__backend">
          <h3>Backend</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Node.Js</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.4 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Express.Js</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.4 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.2 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>SQL Server</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            {!showMoreBE && (
              <div
                className="show_more_skill"
                title="Show Less"
                onClick={() => setShowMoreBE(true)}
              >
                <FaArrowAltCircleDown />
              </div>
            )}
            {showMoreBE && (
              <>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Pocketbase DB</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <div
                  className="show_more_skill"
                  title="Show Less"
                  onClick={() => setShowMoreBE(false)}
                >
                  <FaArrowAltCircleUp />
                </div>
              </>
            )}
          </div>
        </div>

        <div id="skills_other">
          <h3>Other Skills</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>MS PowerApps</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.4 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>MS Power Automate</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.4 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>GIT</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.2 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Agile Methodology</h4>
                <div style={{whiteSpace:"nowrap"}}>
                  <span className="full_circle_light"></span>
                  <span className="full_circle_light"></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                  <span
                    style={{ opacity: 0.1 }}
                    className="full_circle_light"
                  ></span>
                </div>
              </div>
            </article>
            {!showMoreOS && (
              <div
                className="show_more_skill"
                title="Show Less"
                onClick={() => setShowMoreOS(true)}
              >
                <FaArrowAltCircleDown />
              </div>
            )}
            {showMoreOS && (
              <>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Team Management</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <article className="skill__details">
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>Problem Solving</h4>
                    <div style={{whiteSpace:"nowrap"}}>
                      <span className="full_circle_light"></span>
                      <span className="full_circle_light"></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                      <span
                        style={{ opacity: 0.1 }}
                        className="full_circle_light"
                      ></span>
                    </div>
                  </div>
                </article>
                <div
                  className="show_more_skill"
                  title="Show Less"
                  onClick={() => setShowMoreOS(false)}
                >
                  <FaArrowAltCircleUp />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
