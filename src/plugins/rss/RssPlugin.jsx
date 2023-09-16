import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

import "./styles/RssPlugin.css";

function RssPlugin() {
  return (
    <Container className="d-flex flex-row justify-content-center align-items-center">
      <a href="mailto:pablo@alcarazm.es" className="icon px-3" title="E-Mail">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/palcarazm"
        target="_blank"
        className="icon px-3"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/palcarazm"
        target="_blank"
        className="icon px-3"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </Container>
  );
}

export default RssPlugin;
