import Service from "../../models/Service";
import WorkExperienceRepository from "../data/WorkExperienceRepository";

class WorkExperienceService extends Service {
  /**
   * Compare to object for sorting
   * @param {Object} previous
   * @param {Object} current
   * @returns {Number}
   */
  static compare(previous, current) {
    return current.startDate - previous.startDate;
  }
}
WorkExperienceService.repository = WorkExperienceRepository;

export default WorkExperienceService;
