import Service from "../../models/Service";
import CourseRepository from "../data/CourseRepository";

class CourseService extends Service {
  /**
   * Compare to object for sorting
   * @param {Object} previous
   * @param {Object} current
   * @returns {Number}
   */
  static compare(previous, current) {
    return current.endDate - previous.endDate;
  }
}
CourseService.repository = CourseRepository;
export default CourseService;
