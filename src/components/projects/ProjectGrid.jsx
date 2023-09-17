import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Project } from "../../assets/projects";
import { ProjectCell } from "./ProjectCell";

export function ProjectGrid({ projects, className = "" }) {
  return (
    <Row xs={1} lg={2} className={className}>
      {projects.map((project) => (
        <Col
          key={`${project.username}/${project.repo}`}
          className="text-center mb-2"
        >
          <ProjectCell project={project} />
        </Col>
      ))}
    </Row>
  );
}
ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  className: PropTypes.string,
};
