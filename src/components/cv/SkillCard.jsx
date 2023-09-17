import React from "react";
import PropTypes from "prop-types";
import { Skill } from "../../assets/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";

const Rating = React.memo(({ score, className }) => (
  <div className={className}>
    {[...Array(score)].map((_v, key) => (
      <FontAwesomeIcon icon={faCircleCheck} key={key} className="ps-1" />
    ))}
    {[...Array(5 - score)].map((_v, key) => (
      <FontAwesomeIcon icon={faCircleEmpty} key={key} className="ps-1" />
    ))}
  </div>
));

export function SkillCard({ skill }) {
  return (
    <div className="d-flex align-items-center">
      <span className="pe-2">{skill.label}</span>
      <Rating score={skill.level} className="text-primary-emphasis" />
    </div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.instanceOf(Skill).isRequired,
};
