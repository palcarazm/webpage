import React from "react";
import "./styles/horizontal-list.css";

export default function HorizontalList({ className, children }) {
  return (
    <dic className={`d-flex flex-wrap horizontal-list ${className}`}>
      {children}
    </dic>
  );
}
