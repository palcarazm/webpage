import React from "react";
import PropTypes from "prop-types";
import { WorkExperience } from "../../assets/work-experience";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function WorkExperienceCard({ workExperience }) {
  return (
    <div className="timeline-card">
      <h3 className="m-0">{workExperience.job}</h3>
      {workExperience.website && (
        <div>
          <FontAwesomeIcon icon={faLink} className="pe-2" />
          <a
            href={workExperience.website}
            target="_blank"
            className="text-decoration-none text-body"
          >
            {workExperience.employer}
          </a>
        </div>
      )}
      {!workExperience.website && <div>{workExperience.employer}</div>}
      <div className="d-flex justify-content-start fw-lighter">
        <div className="text-capitalize pe-3">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {workExperience.period}
        </div>
        <div className="pe-3">
          <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
          {workExperience.place}
        </div>
      </div>
      <div className="fw-light">{workExperience.description}</div>
    </div>
  );
}

WorkExperienceCard.propTypes = {
  workExperience: PropTypes.instanceOf(WorkExperience).isRequired,
};
