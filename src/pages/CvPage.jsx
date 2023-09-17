import React, { useContext } from "react";
import { MainLayout } from "../layouts";
import { LangContext, Langs } from "../plugins";
import { Section } from "../components/global";
import {
  DegreeList,
  LanguageList,
  WorkExperienceList,
  CertificateList,
  SoftSkillList,
} from "../components/cv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faGraduationCap,
  faLanguage,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return {
        workExperience: "Expérience professionnelle",
        education: "Éducation et formation",
        language: "Compétences linguistiques",
        certification: "Certifications professionnelles",
        softSkill: "Compétences non techniques",
      };
    case Langs.es:
    default:
      return {
        workExperience: "Experiencia laboral",
        education: "Educación y formation",
        language: "Competencias lingüísticas",
        certification: "Certificaciones profesionales",
        softSkill: "Competencias interpersonales",
      };
  }
}

function CvPage() {
  const { langState } = useContext(LangContext);
  const translation = getTranslation(langState.lang);

  return (
    <MainLayout>
      <Section
        closable={true}
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
        closable={true}
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
        closable={true}
        title={
          <>
            <FontAwesomeIcon icon={faLanguage} className="pe-2" />
            {translation.language}
          </>
        }
      >
        <LanguageList />
      </Section>
      <Section
        closable={true}
        title={
          <>
            <FontAwesomeIcon icon={faCertificate} className="pe-2" />
            {translation.certification}
          </>
        }
      >
        <CertificateList />
      </Section>
      <Section
        closable={true}
        title={
          <>
            <FontAwesomeIcon icon={faStar} className="pe-2" />
            {translation.softSkill}
          </>
        }
      >
        <SoftSkillList />
      </Section>
    </MainLayout>
  );
}

export default CvPage;
