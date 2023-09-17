import React, { useContext } from "react";
import { SkillService } from "../../assets/skills";
import { LangContext } from "../../plugins";
import HorizontalList from "../global/HorizontalList";
import { SkillCard } from "./SkillCard";

export function SkillList() {
  const { langState } = useContext(LangContext);

  const skillCategories = SkillService.getAllCategories(langState.lang);

  return skillCategories.data.map((category) => (
    <div key={category.key} className="mb-2">
      <h3 className="m-0 text-primary" style={{ fontSize: "large" }}>
        {category.icon}
        {category.category}
      </h3>
      <HorizontalList>
        {SkillService.getAllByCategory(langState.lang, category).data.map(
          (skill) => (
            <SkillCard key={skill.key} skill={skill} />
          )
        )}
      </HorizontalList>
    </div>
  ));
}
