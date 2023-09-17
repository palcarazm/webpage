import React from "react";
import PropTypes from "prop-types";

function VerticalList({ className, size = "medium", children }) {
  return (
    <div
      className={`d-flex flex-column ${className}`}
      style={{ fontSize: size }}
    >
      {children}
    </div>
  );
}

VerticalList.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  children: PropTypes.node.isRequired,
};

export default VerticalList;
