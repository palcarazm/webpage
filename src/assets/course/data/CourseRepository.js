import Repository from "../../models/Repository";
import courses from "./courses";

class CourseRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    return CourseRepository.#get(lang).toSorted(sortFn).slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    CourseRepository.#get(lang).length;
  }

  static #get(lang) {
    return courses.map((course) => {
      course.lang = lang;
      return course;
    });
  }
}
export default CourseRepository;
