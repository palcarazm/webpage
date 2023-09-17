import Singleton from "./Singleton";

class Repository extends Singleton {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    throw new Error("This method has to be implemented in the children class.");
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    throw new Error("This method has to be implemented in the children class.");
  }
}

export default Repository;
