import React from "react";
import { ProfileHeader } from "../components/profile";
import BaseLayout from "./BaseLayout";
import { Container } from "react-bootstrap";
import { AppNavBar } from "../components/navigation";

function MainLayout({ children }) {
  return (
    <BaseLayout>
      <div className="py-3 bg-dark-subtle">
        <ProfileHeader />
      </div>
      <Container>
        <AppNavBar className={"justify-content-center pb-3"} />
        <main>{children}</main>
      </Container>
    </BaseLayout>
  );
}

export default MainLayout;
