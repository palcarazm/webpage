import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./styles/RssPlugin.css";

function RssPlugin() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center mt-2">
      <a href="mailto:pablo@alcarazm.es" className="icon pe-3" title="E-Mail">
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
        className="icon ps-3"
        title="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default RssPlugin;
