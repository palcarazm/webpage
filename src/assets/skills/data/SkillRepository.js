import { Langs } from "../../../plugins";
import Repository from "../../models/Repository";
import es from "./es";
import fr from "./fr";

class SkillRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @param {Function} filterFn Filtering function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn, filterFn = Repository.utils.noFilterFn) {
    return SkillRepository.#get(lang)
      .filter(filterFn)
      .toSorted(sortFn)
      .slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @param {Function} filterFn Filtering function
   * @returns {Integer}
   */
  static size(lang, filterFn = Repository.utils.noFilterFn) {
    SkillRepository.#get(lang).filter(filterFn).length;
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
export default SkillRepository;
