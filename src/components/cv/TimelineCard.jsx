import React from "react";
import "./styles/timeline-card.css";

export function TimelineCard({ title, children }) {
  return (
    <div className="timeline-card">
      <h3 className="m-0">{title}</h3>
      {children}
    </div>
  );
}
