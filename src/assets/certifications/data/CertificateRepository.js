import { Langs } from "../../../plugins";
import Repository from "../../models/Repository";
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

class CertificateRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    return CertificateRepository.#get(lang).toSorted(sortFn).slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    CertificateRepository.#get(lang).length;
  }

  static #get(lang) {
    return certificates.map((certificate) => {
      certificate.lang = lang;
      return certificate;
    });
  }
}
export default CertificateRepository;
