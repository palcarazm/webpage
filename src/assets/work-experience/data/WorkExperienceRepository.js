import { Langs } from "../../../plugins";
import Repository from "../../models/Repository";
import es from "./es";
import fr from "./fr";

class WorkExperienceRepository extends Repository {
  /**
   * Retrive the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    switch (lang) {
      case Langs.fr:
        return fr.toSorted(sortFn).slice(0, num);
      case Langs.es:
      default:
        return es.toSorted(sortFn).slice(0, num);
    }
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    switch (lang) {
      case Langs.fr:
        return fr.length;
      case Langs.es:
      default:
        return es.length;
    }
  }
}

export default WorkExperienceRepository;
