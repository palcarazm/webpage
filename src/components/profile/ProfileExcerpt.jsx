import React from "react";
import { Langs } from "../../plugins";
import HorizontalList from "../global/HorizontalList";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return { job: "BA à Sopra Steria", formation: "Ingénieur Aéronautique" };
    case Langs.es:
    default:
      return { job: "BA en Sopra Steria", formation: "Ingeniero Aeronáutico" };
  }
}

export function ProfileExcerpt({ lang, className = "" }) {
  const translation = getTranslation(lang);
  return (
    <HorizontalList className={className}>
      <div>{translation.job}</div>
      <a
        href="https://app.skillsclub.com/credential/27629-a9838cdc21b2d5259db36dfb40d56b9e2b07f41d0ba678c032e35fa8ed318203"
        target="_blank"
        className="text-body text-decoration-none"
      >
        ISTQB© CTFL
      </a>
      <div>{translation.formation}</div>
    </HorizontalList>
  );
}
