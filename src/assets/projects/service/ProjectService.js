import Singleton from "../../models/Singleton";
import ProjectRepository from "../data/ProjectRepository";

class ProjectService extends Singleton {
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
