import CertificateRepository from "../data/CertificateRepository";

class CertificateService {
  constructor() {
    throw new Error(
      `CertificateService is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    return CertificateRepository.get(lang).sort(
      (previous, current) => current.startDate - previous.startDate
    );
  }
}
export default CertificateService;
