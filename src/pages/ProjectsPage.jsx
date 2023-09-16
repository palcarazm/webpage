import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { ProjectGrid } from "../components/projects";
import { ProjectService } from "../assets/projects";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        contributions: "Projets auxquels je contribue",
        owner: "Projets personnels",
      };
    case Langs.es:
    default:
      return {
        contributions: "Proyectos donde participo",
        owner: "Proyectos propios",
      };
  }
}

function ProjectsPage() {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);

  const contributions = ProjectService.getContributions();
  const owns = ProjectService.getOwns();

  return (
    <MainLayout>
      <h2 className="fs-5">{translation.contributions}</h2>
      <ProjectGrid projects={contributions} className="mb-3" />
      <h2 className="fs-5">{translation.owner}</h2>
      <ProjectGrid projects={owns} className="mb-3" />
    </MainLayout>
  );
}

export default ProjectsPage;
