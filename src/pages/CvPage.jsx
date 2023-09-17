import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { Section } from "../components/global";
import { WorkExperienceList } from "../components/cv";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        workExperience: "Expérience professionnelle",
      };
    case Langs.es:
    default:
      return {
        workExperience: "Experiencia laboral",
      };
  }
}

function CvPage() {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);

  return (
    <MainLayout>
      <Section title={translation.workExperience}>
        <WorkExperienceList />
      </Section>
    </MainLayout>
  );
}

export default CvPage;
