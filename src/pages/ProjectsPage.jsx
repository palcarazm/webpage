import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { Section } from "../components/global";
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
      <Section title={translation.contributions}>
        <ProjectGrid projects={contributions} />
      </Section>
      <Section title={translation.owner}>
        <ProjectGrid projects={owns} />
      </Section>
    </MainLayout>
  );
}

export default ProjectsPage;
