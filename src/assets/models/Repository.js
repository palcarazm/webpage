import Singleton from "./Singleton";

class Repository extends Singleton {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @param {Function} filterFn Filtering function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn, filterFn) {
    throw new Error("This method has to be implemented in the children class.");
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @param {Function} filterFn Filtering function
   * @returns {Integer}
   */
  static size(lang, filterFn) {
    throw new Error("This method has to be implemented in the children class.");
  }
}

Repository.utils = {
  noFilterFn: () => true,
};

export default Repository;
