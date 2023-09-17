import React, { useState } from "react";
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SectionIcon({ open }) {
  if (open) {
    return <FontAwesomeIcon icon={faChevronUp} className="ps-2" />;
  } else {
    return <FontAwesomeIcon icon={faChevronDown} className="ps-2" />;
  }
}

export function Section({ title, children, closable = false, open = true }) {
  const [isOpen, setState] = useState(open);
  const toggle = () => setState((state) => (closable ? !state : state));

  return (
    <section className="bg-body-tertiary p-3 mb-4 shadow">
      <div
        className={`d-flex justify-content-start align-items-center ${
          closable ? "clickable" : ""
        }`}
        onClick={toggle}
      >
        <h2 className="fs-5 flex-grow-1 m-0 p-0">{title}</h2>
        {closable && <SectionIcon open={isOpen} />}
      </div>
      {isOpen && (
        <div className="border-start border-dark-subtle border-3 py-2">
          {children}
        </div>
      )}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  closable: PropTypes.bool,
  open: PropTypes.bool,
};
