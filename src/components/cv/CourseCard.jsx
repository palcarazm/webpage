import React from "react";
import PropTypes from "prop-types";
import { Course } from "../../assets/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faFileCircleCheck,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import HorizontalList from "../global/HorizontalList";
import { TimelineCard } from "./TimelineCard";

export function CourseCard({ course }) {
  return (
    <TimelineCard title={course.course.label}>
      <HorizontalList className="fw-lighter" size="small">
        <div>
          <FontAwesomeIcon icon={faLandmark} className="pe-2" />
          {course.entity}
        </div>
        <div className="text-capitalize">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {course.formattedEndDate}
        </div>
        <div>
          <a
            href={course.courseLink}
            target="_blank"
            className="text-primary-emphasis"
          >
            <FontAwesomeIcon icon={faFileCircleCheck} className="pe-2" />
          </a>
        </div>
      </HorizontalList>
    </TimelineCard>
  );
}

CourseCard.propTypes = {
  course: PropTypes.instanceOf(Course).isRequired,
};
