import React, { useContext } from "react";
import { LangContext, Langs, ThemePlugin } from "../../plugins";
import { Nav } from "react-bootstrap";
import { AppRoutes } from "../../router";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return { projects: "Projets", cv: "CV" };
    case Langs.es:
    default:
      return { projects: "Proyectos", cv: "CV" };
  }
}

export function AppNavBar({ className = "" }) {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);
  return (
    <Nav variant="underline" className={className}>
      <Nav.Item>
        <LinkContainer to={AppRoutes.projects}>
          <Nav.Link className="text-body">
            <FontAwesomeIcon icon={faCode} className="me-2" />
            {translation.projects}
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={AppRoutes.cv}>
          <Nav.Link className="text-body">
            <FontAwesomeIcon icon={faIdCard} className="me-2" />
            {translation.cv}
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as="div">
          <ThemePlugin />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
