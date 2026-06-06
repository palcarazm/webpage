import React from "react";
import PropTypes from "prop-types";
import "./styles/timeline-card.css";

export function TimelineCard({ title, children }) {
  return (
    <div className="timeline-card">
      <h3 className="m-0 text-primary">{title}</h3>
      {children}
    </div>
  );
}

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};