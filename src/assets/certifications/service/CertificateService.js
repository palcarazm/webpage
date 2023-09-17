import Service from "../../models/Service";
import CertificateRepository from "../data/CertificateRepository";

class CertificateService extends Service {
  /**
   * Compare to object for sorting
   * @param {Object} previous
   * @param {Object} current
   * @returns {Number}
   */
  static compare(previous, current) {
    return current.startDate - previous.startDate;
  }
}
CertificateService.repository = CertificateRepository;
export default CertificateService;
