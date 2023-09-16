import ProjectRepository from "../data/ProjectRepository";

class ProjectService {
  constructor() {
    throw new Error(
      `ProjectService is a static class and can't be instantiated`
    );
  }
  static get() {
    return ProjectRepository.get();
  }

  static getContributions() {
    return ProjectRepository.get().filter(
      (project) => project.username != "palcarazm"
    );
  }

  static getOwns() {
    return ProjectRepository.get().filter(
      (project) => project.username === "palcarazm"
    );
  }
}
export default ProjectService;
