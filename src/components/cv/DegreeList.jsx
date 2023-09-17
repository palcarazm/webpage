import React, { useContext } from "react";
import { DegreeService } from "../../assets/education";
import { LangContext } from "../../plugins";
import { DegreeCard } from "./DegreeCard";

export function DegreeList() {
  const { langState } = useContext(LangContext);

  const degrees = DegreeService.get(langState.lang);

  return degrees.map((degree) => (
    <DegreeCard key={degree.key} degree={degree} />
  ));
}
