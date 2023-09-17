import { Langs } from "../../../plugins";
import Certificate from "../model/Certificate";

const certificates = [
  new Certificate(
    "ISTQB - CTFL Certified Tester Foundation Level",
    "International Software Testing Qualifications Board",
    "https://app.skillsclub.com/credential/27629-a9838cdc21b2d5259db36dfb40d56b9e2b07f41d0ba678c032e35fa8ed318203",
    new Date("2022-10-26"),
    null
  ),
];

class CertificateRepository {
  constructor() {
    throw new Error(
      `CertificateRepository is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    return certificates.map((certificate) => {
      certificate.lang = lang;
      return certificate;
    });
  }
}
export default CertificateRepository;
