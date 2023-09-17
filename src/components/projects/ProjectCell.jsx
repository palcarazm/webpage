import React from "react";
import PropTypes from "prop-types";
import { Project } from "../../assets/projects";

export function ProjectCell({ project }) {
  return (
    <a href={project.link}>
      <img src={project.lightImgUrl} className="mw-100" />
    </a>
  );
}

ProjectCell.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
};
