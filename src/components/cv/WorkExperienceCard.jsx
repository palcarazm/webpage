import React from "react";
import PropTypes from "prop-types";
import { WorkExperience } from "../../assets/work-experience";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { TimelineCard } from "./TimelineCard";
import VerticalList from "../global/VerticalList";

export function WorkExperienceCard({ workExperience }) {
  return (
    <TimelineCard title={workExperience.job}>
      <VerticalList className="fw-lighter">
        {workExperience.website && (
          <div>
            <a
              href={workExperience.website}
              target="_blank"
              className="text-decoration-none text-body"
            >
              <FontAwesomeIcon icon={faBuilding} className="pe-2" />
              {workExperience.employer}
            </a>
          </div>
        )}
        {!workExperience.website && (
          <div>
            <FontAwesomeIcon icon={faBuilding} className="pe-2" />
            {workExperience.employer}
          </div>
        )}
        <div className="text-capitalize pe-3">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {workExperience.period}
        </div>
        <div className="pe-3">
          <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
          {workExperience.place}
        </div>
      </VerticalList>
      <div className="fw-light">{workExperience.description}</div>
    </TimelineCard>
  );
}

WorkExperienceCard.propTypes = {
  workExperience: PropTypes.instanceOf(WorkExperience).isRequired,
};
