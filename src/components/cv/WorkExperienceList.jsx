import React, { useContext } from "react";
import { WorkExperienceService } from "../../assets/work-experience";
import { LangContext } from "../../plugins";
import { WorkExperienceCard } from "./WorkExperienceCard";

export function WorkExperienceList() {
  const { langState } = useContext(LangContext);

  const workExperiences = WorkExperienceService.get(langState.lang);

  return workExperiences.map((workExperience) => (
    <WorkExperienceCard
      key={workExperience.key}
      workExperience={workExperience}
    />
  ));
}
