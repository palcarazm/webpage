import React from "react";
import PropTypes from "prop-types";
import { Degree } from "../../assets/education";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { TimelineCard } from "./TimelineCard";

export function DegreeCard({ degree }) {
  return (
    <TimelineCard title={degree.study}>
      {degree.website && (
        <div>
          <FontAwesomeIcon icon={faLink} className="pe-2" />
          <a
            href={degree.website}
            target="_blank"
            className="text-decoration-none text-body"
          >
            {degree.center}
          </a>
        </div>
      )}
      {!degree.website && <div>{degree.center}</div>}
      <div className="d-flex justify-content-start fw-lighter">
        <div className="text-capitalize pe-3">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {degree.period}
        </div>
        <div className="pe-3">
          <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
          {degree.place}
        </div>
      </div>
    </TimelineCard>
  );
}

DegreeCard.propTypes = {
  degree: PropTypes.instanceOf(Degree).isRequired,
};
