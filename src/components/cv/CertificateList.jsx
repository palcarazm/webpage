import React, { useContext } from "react";
import { CertificateService } from "../../assets/certifications";
import { LangContext } from "../../plugins";
import { CertificateCard } from "./CertificateCard";

export function CertificateList() {
  const { langState } = useContext(LangContext);

  const certificates = CertificateService.getAll(langState.lang);

  return certificates.data.map((certificate) => (
    <CertificateCard key={certificate.key} certificate={certificate} />
  ));
}
