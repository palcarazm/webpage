import React from "react";
import { Container } from "react-bootstrap";
import BaseLayout from "./BaseLayout";

function CenterLayout({ children }) {
  return (
    <BaseLayout>
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        {children}
      </Container>
    </BaseLayout>
  );
}

export default CenterLayout;
