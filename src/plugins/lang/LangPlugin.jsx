import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { LangContext } from "./index";

function setLang(e, callback) {
  e.preventDefault();
  callback();
}

function LangPlugin() {
  const { es, fr } = useContext(LangContext);

  return (
    <Container className="d-flex flex-row justify-content-center align-items-center">
      <a onClick={(e) => setLang(e, es)} className="icon px-3" title="Español">
        <span className="fi fi-es fis"></span>
      </a>
      <a onClick={(e) => setLang(e, fr)} className="icon px-3" title="Français">
        <span className="fi fi-fr fis"></span>
      </a>
    </Container>
  );
}

export default LangPlugin;
