import React from "react";

function BaseLayout({ children }) {
  return (
    <div className="bg-body-secondary w-100" style={{ minHeight: "1vh" }}>
      {children}
    </div>
  );
}

export default BaseLayout;
