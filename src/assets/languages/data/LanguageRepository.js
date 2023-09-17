import Repository from "../../models/Repository";
import Language from "../model/Language";
import LanguageNames from "./LanguageNameRepository";
import Levels from "./LevelRepository";

const Languages = [
  new Language(LanguageNames.get("ES"), Levels.get("C2")),
  new Language(LanguageNames.get("FR"), Levels.get("C1")),
  new Language(LanguageNames.get("EN"), Levels.get("B2")),
];

class LanguageRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    return LanguageRepository.#get(lang).toSorted(sortFn).slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    LanguageRepository.#get(lang).length;
  }

  static #get(lang) {
    return Languages.map((language) => {
      language.lang = lang;
      return language;
    });
  }
}

export default LanguageRepository;
