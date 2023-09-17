import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { Section } from "../components/global";
import { DegreeList, LanguageList, WorkExperienceList } from "../components/cv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLanguage,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        workExperience: "Expérience professionnelle",
        education: "Éducation et formation",
        language: "Compétences linguistiques",
      };
    case Langs.es:
    default:
      return {
        workExperience: "Experiencia laboral",
        education: "Educación y formation",
        language: "Competencias lingüísticas",
      };
  }
}

function CvPage() {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);

  return (
    <MainLayout>
      <Section
        title={
          <>
            <FontAwesomeIcon icon={faSuitcase} className="pe-2" />
            {translation.workExperience}
          </>
        }
      >
        <WorkExperienceList />
      </Section>
      <Section
        title={
          <>
            <FontAwesomeIcon icon={faGraduationCap} className="pe-2" />
            {translation.education}
          </>
        }
      >
        <DegreeList />
      </Section>
      <Section
        title={
          <>
            <FontAwesomeIcon icon={faLanguage} className="pe-2" />
            {translation.language}
          </>
        }
      >
        <LanguageList />
      </Section>
    </MainLayout>
  );
}

export default CvPage;
