import React from "react";
import PropTypes from "prop-types";
import { Certificate } from "../../assets/certifications";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faFileCircleCheck,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import { TimelineCard } from "./TimelineCard";
import HorizontalList from "../global/HorizontalList";

export function CertificateCard({ certificate }) {
  return (
    <TimelineCard title={certificate.certificate}>
      <HorizontalList className="fw-lighter" size="small">
        <div>
          <FontAwesomeIcon icon={faLandmark} className="pe-2" />
          {certificate.entity}
        </div>
        <div className="text-capitalize ">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {certificate.period}
        </div>
        <div>
          <a
            href={certificate.certificateLink}
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

CertificateCard.propTypes = {
  certificate: PropTypes.instanceOf(Certificate).isRequired,
};
