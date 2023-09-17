import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { Section } from "../components/global";
import { DegreeList, WorkExperienceList } from "../components/cv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSuitcase } from "@fortawesome/free-solid-svg-icons";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        workExperience: "Expérience professionnelle",
        education: "Éducation et formation",
      };
    case Langs.es:
    default:
      return {
        workExperience: "Experiencia laboral",
        education: "Educación y formation",
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
    </MainLayout>
  );
}

export default CvPage;
