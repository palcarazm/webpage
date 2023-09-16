import React, { useContext } from "react";
import { LangContext, Langs } from "../../plugins";
import { Nav } from "react-bootstrap";
import { AppRoutes } from "../../router";
import { LinkContainer } from "react-router-bootstrap";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return { projects: "Projets" };
    case Langs.es:
    default:
      return { projects: "Proyectos" };
  }
}

export function AppNavBar() {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);
  return (
    <Nav variant="underline">
      <Nav.Item>
        <LinkContainer to={AppRoutes.projects}>
          <Nav.Link className="text-body">{translation.projects}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
