import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { Themes } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as off } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as on } from "@fortawesome/free-regular-svg-icons";
import { LangContext, Langs } from "../lang";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        darkMode: "Mode obscure",
        lightMode: "Mode claire",
      };
    case Langs.es:
    default:
      return {
        darkMode: "Mode oscuro",
        lightMode: "Mode claro",
      };
  }
}

function getThemeOptions(theme, lang) {
  const translation = getTranslation(lang);
  if (theme === Themes.light) {
    return {
      icon: <FontAwesomeIcon icon={off} />,
      label: translation.darkMode,
    };
  } else {
    return {
      icon: <FontAwesomeIcon icon={on} />,
      label: translation.lightMode,
    };
  }
}

function ThemePlugin() {
  const { themeState, toggleTheme } = useContext(ThemeContext);
  const { langState } = useContext(LangContext);

  const themeOptions = getThemeOptions(themeState.theme, langState.lang);

  return (
    <div
      onClick={(e) => {
        e.preventDefault;
        toggleTheme();
      }}
      className="text-body clickable"
      title={themeOptions.label}
    >
      {themeOptions.icon}
    </div>
  );
}

export default ThemePlugin;
