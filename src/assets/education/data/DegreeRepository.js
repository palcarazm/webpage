import { Langs } from "../../../plugins";
import Repository from "../../models/Repository";
import es from "./es";
import fr from "./fr";

class DegreeRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    return DegreeRepository.#get(lang).toSorted(sortFn).slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    DegreeRepository.#get(lang).length;
  }

  static #get(lang) {
    switch (lang) {
      case Langs.fr:
        return fr;
      case Langs.es:
      default:
        return es;
    }
  }
}
export default DegreeRepository;
