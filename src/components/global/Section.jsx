import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionIcon = memo(({ open }) => {
  if (open) {
    return <FontAwesomeIcon icon={faChevronUp} className="ps-2" />;
  } else {
    return <FontAwesomeIcon icon={faChevronDown} className="ps-2" />;
  }
});

SectionIcon.displayName = "SectionIcon";
SectionIcon.propTypes = {
  open: PropTypes.bool.isRequired,
};

export const Section = memo(({ title, children, closable = false, open = true }) => {
  const [isOpen, setState] = useState(open);
  const toggle = () => setState((state) => (closable ? !state : state));

  return (
    <section className="bg-body-tertiary p-3 mb-4 shadow">
      <div
        className={`d-flex justify-content-start align-items-center ${
          closable ? "clickable" : ""
        }`}
        onClick={toggle}
        role={closable ? "button" : undefined}
        tabIndex={closable ? 0 : undefined}
        onKeyDown={closable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        } : undefined}
      >
        <h2 className="fs-5 flex-grow-1 m-0 p-0">{title}</h2>
        {closable && <SectionIcon open={isOpen} />}
      </div>
      {isOpen && <div className="py-2">{children}</div>}
    </section>
  );
});

Section.displayName = "Section";

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  closable: PropTypes.bool,
  open: PropTypes.bool,
};