class ResultSet {
  #data;
  #size;
  /**
   * Create a new result set
   * @param {Array<Object>} data
   * @param {Integer} size
   */
  constructor(data, size) {
    this.#data = data;
    this.#size = size;
  }

  /**
   * @returns {Array<Object>}
   */
  get data() {
    return this.#data;
  }

  /**
   * @returns {Integer}
   */
  get size() {
    return this.#size;
  }
}
export default ResultSet;
