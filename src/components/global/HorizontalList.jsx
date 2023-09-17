import React from "react";
import PropTypes from "prop-types";

import "./styles/horizontal-list.css";

function HorizontalList({ className, size = "medium", children }) {
  return (
    <div
      className={`d-flex flex-wrap horizontal-list ${className}`}
      style={{ fontSize: size }}
    >
      {children}
    </div>
  );
}

HorizontalList.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  children: PropTypes.node.isRequired,
};

export default HorizontalList;
