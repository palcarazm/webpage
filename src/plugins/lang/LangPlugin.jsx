import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LangContext, Langs } from "./index";

function setLang(e, callback) {
  e.preventDefault();
  callback();
}

function LangPlugin({ lang }) {
  const { es, fr } = useContext(LangContext);
  switch (lang) {
    case Langs.es:
      return (
        <a
          onClick={(e) => setLang(e, es)}
          className="clickable"
          title="Español"
        >
          <span className="fi fi-es fis"></span>
        </a>
      );
    case Langs.fr:
      return (
        <a
          onClick={(e) => setLang(e, fr)}
          className="clickable"
          title="Français"
        >
          <span className="fi fi-fr fis"></span>
        </a>
      );
    default:
      throw new Error(`Unsupported language ${lang}`);
  }
}

LangPlugin.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default LangPlugin;
