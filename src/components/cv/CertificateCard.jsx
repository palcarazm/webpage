import React from "react";
import PropTypes from "prop-types";
import { Certificate } from "../../assets/certifications";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { TimelineCard } from "./TimelineCard";

export function CertificateCard({ certificate }) {
  return (
    <TimelineCard title={certificate.certificate}>
      <div>{certificate.entity}</div>
      <div className="d-flex justify-content-start fw-lighter">
        <div className="text-capitalize pe-3">
          <FontAwesomeIcon icon={faCalendar} className="pe-2" />
          {certificate.period}
        </div>
        <div className="pe-3">
          <a href={certificate.certificateLink} target="_blank">
            <FontAwesomeIcon icon={faFileCircleCheck} className="pe-2" />
          </a>
        </div>
      </div>
    </TimelineCard>
  );
}

CertificateCard.propTypes = {
  certificate: PropTypes.instanceOf(Certificate).isRequired,
};
