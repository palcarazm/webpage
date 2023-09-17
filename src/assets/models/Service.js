import ResultSet from "./ResultSet";
import Singleton from "./Singleton";

class Service extends Singleton {
  #repository;

  /**
   * @param {Class} repository
   */
  set repository(repository) {
    this.#repository = repository;
  }
  /**
   * @returns {Class}
   */
  get repository() {
    return this.#repository;
  }

  /**
   * Compare to object for sorting
   * @param {Object} previous
   * @param {Object} current
   * @returns {Number}
   */
  static compare(previous, current) {
    return 0;
  }

  /**
   * Get all records sorted
   * @param {String} lang Language to use
   * @returns {ResultSet}
   */
  static getAll(lang) {
    return new ResultSet(
      this.repository.get(lang, this.repository.size(lang), this.compare),
      this.repository.size(lang)
    );
  }

  /**
   *
   * @param {String} lang Language to use
   * @param {Integer} num Number to retrieve
   * @returns {ResultSet}
   */
  static get(lang, num) {
    return new ResultSet(
      this.repository.get(lang, num, this.compare),
      this.repository.size(lang)
    );
  }
}

export default Service;
