import React from "react";
import "./styles/styles.css";

function BaseLayout({ children }) {
  return <div className="w-100">{children}</div>;
}

export default BaseLayout;
