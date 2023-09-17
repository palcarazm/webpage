import React from "react";
import PropTypes from "prop-types";
import { Degree } from "../../assets/education";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLandmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { TimelineCard } from "./TimelineCard";
import VerticalList from "../global/VerticalList";

export function DegreeCard({ degree }) {
  return (
    <TimelineCard title={degree.study}>
      <VerticalList className="fw-lighter">
        {degree.website && (
          <a
            href={degree.website}
            target="_blank"
            className="text-decoration-none text-body"
          >
            <FontAwesomeIcon icon={faLandmark} className="pe-2" />
            {degree.center}
          </a>
        )}
        {!degree.website && <div>{degree.center}</div>}
        <div className="text-capitalize">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {degree.period}
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
          {degree.place}
        </div>
      </VerticalList>
    </TimelineCard>
  );
}

DegreeCard.propTypes = {
  degree: PropTypes.instanceOf(Degree).isRequired,
};
