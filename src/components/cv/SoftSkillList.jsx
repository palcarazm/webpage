import React, { useContext } from "react";
import { SoftSkillService } from "../../assets/soft-skills";
import { LangContext } from "../../plugins";
import HorizontalList from "../global/HorizontalList";

export function SoftSkillList() {
  const { langState } = useContext(LangContext);

  const softSkills = SoftSkillService.getAll(langState.lang);

  return (
    <HorizontalList className="ms-2">
      {softSkills.data.map((softSkill) => (
        <span key={softSkill.key}>{softSkill.get(langState.lang)}</span>
      ))}
    </HorizontalList>
  );
}
