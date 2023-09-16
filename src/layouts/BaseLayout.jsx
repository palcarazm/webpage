import React from "react";

function BaseLayout({ children }) {
  return <div className="bg-body-secondary vh-100 w-100">{children}</div>;
}

export default BaseLayout;
