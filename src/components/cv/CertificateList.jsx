import React, { useContext } from "react";
import { CertificateService } from "../../assets/certifications";
import { LangContext } from "../../plugins";
import { CertificateCard } from "./CertificateCard";

export function CertificateList() {
  const { langState } = useContext(LangContext);

  const certificates = CertificateService.get(langState.lang);

  return certificates.map((certificate) => (
    <CertificateCard key={certificate.key} certificate={certificate} />
  ));
}
