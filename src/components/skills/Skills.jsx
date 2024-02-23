/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import "./Skills.css";
import SkillList from "./SkillList";

const Skills = () => {
  const options = {
    method: "GET",
    headers: { "content-type": "application/json" },
    mode: "cors",
  };

  const getSkills = useCallback(async () => {
    const response = await fetch(
      "https://portfolio-jd.pockethost.io/api/collections/Skills/records",
      options
    );
    return response.json();
  }, [options]);

  let [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then((data) => {
      setSkills(data?.items?.[0]?.skillList);
    });
  }, []);

  return (
    <section id="skills">
      <h5>The skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        <div id="skill__frontend">
          <h3>Frontend</h3>
          {skills?.length ? <SkillList skills={skills} type={'frontend'}/> : null}
        </div>

        <div id="skill__backend">
          <h3>Backend</h3>
          {skills?.length ? <SkillList skills={skills} type={'backend'}/> : null}
        </div>

        <div id="skills_other">
          <h3>Other Skills</h3>
          {skills?.length ? <SkillList skills={skills} type={'other'}/> : null}
        </div>
      </div>
    </section>
  );
};

export default Skills;
