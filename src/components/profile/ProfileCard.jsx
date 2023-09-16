import React from "react";
import { ProfilePic } from "./ProfilePic";
import { ProfileExcerpt } from "./ProfileExcerpt";
import { Container } from "react-bootstrap";

export function ProfileCard({ lang }) {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <ProfilePic />
      <h1 className="fs-4">Pablo Alcaraz Martinez</h1>
      <ProfileExcerpt lang={lang} className={"fs-5"} />
    </Container>
  );
}
