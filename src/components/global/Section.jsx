import React from "react";

export function Section({ title, children }) {
  return (
    <section>
      <h2 className="fs-5">{title}</h2>
      <div className="border-start border-dark-subtle border-3 mb-3">
        {children}
      </div>
    </section>
  );
}
