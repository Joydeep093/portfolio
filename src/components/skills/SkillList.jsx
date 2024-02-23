import { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const SkillList = ({ skills, type }) => {
  const [skillList, setSkillList] = useState(skills);
  let [showMoreSkills, setShowMore] = useState(false);
  let totalItems = 0;
  const initialItems = 4;
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setSkillList(
      skills
        .filter((skill) => skill.skillName.toUpperCase() === type.toUpperCase())
        .slice(0, initialItems)
    );
  }, [skills, type]);

  const showMore = (itemIdx) => {
    counter = counter + itemIdx;
    setCounter(counter + itemIdx);
    setSkillList(
      skills
        .filter((skill) => skill.skillName.toUpperCase() === type.toUpperCase())
        .slice(0, initialItems + counter)
    );
    totalItems = skills.filter(
      (skill) => skill.skillName.toUpperCase() === type.toUpperCase()
    ).length;
    if (initialItems + counter >= totalItems) {
      setShowMore(true);
    }
  };

  const showLess = (items) => {
    setCounter(0);
    setShowMore(false);
    setSkillList(
      skills
        .filter((skill) => skill.skillName.toUpperCase() === type.toUpperCase())
        .slice(0, items)
    );
  };

  return (
    <div className="skill__content" id={type}>
      {skillList.length
        ? skillList.map((skill, idx) => {
            if (skill?.skillName?.toUpperCase() === type.toUpperCase()) {
              return (
                <article className="skill__details" key={skill.name + idx}>
                  <BsFillPatchCheckFill className="skill__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <div style={{ whiteSpace: "nowrap" }}>
                      {skill.proficiency?.map((val, idx) => {
                        return (
                          <span
                            style={{ opacity: val }}
                            className="full_circle_light"
                            key={val + idx}
                          ></span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            } else {
              return null;
            }
          })
        : null}
      {!showMoreSkills && (
        <div
          className="show_more_skill"
          title="Show More"
          onClick={() => showMore(2)}
        >
          <FaArrowAltCircleDown />
        </div>
      )}
      {showMoreSkills && (
        <div
          className="show_more_skill"
          title="Show More"
          onClick={() => showLess(4)}
        >
          <FaArrowAltCircleUp />
        </div>
      )}
    </div>
  );
};

export default SkillList;
