import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Project } from "../../assets/projects";
import ProjectCard from "./ProjectCard";

export function ProjectGrid({ projects, className = "" }) {
  return (
    <Row xs={1} md={2} lg={2} className={className}>
      {projects.map((project) => (
        <Col
          key={`${project.username}/${project.repo}`}
          className="mb-4"
        >
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  className: PropTypes.string,
};