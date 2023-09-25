import React from "react";
import PropTypes from "prop-types";
import { Project } from "../../assets/projects";

export function ProjectCell({ project, isLight }) {
  return (
    <a href={project.link}>
      <img
        src={isLight ? project.lightImgUrl : project.darkImgUrl}
        className="mw-100"
      />
    </a>
  );
}

ProjectCell.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  isLight: PropTypes.bool.isRequired,
};
