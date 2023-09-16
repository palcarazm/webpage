import WorkExperienceRepository from "../data/WorkExperienceRepository";

class WorkExperienceService {
  constructor() {
    throw new Error(
      `WorkExperienceService is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    return WorkExperienceRepository.get(lang).sort(
      (previous, current) => current.startDate - previous.startDate
    );
  }
}
export default WorkExperienceService;
