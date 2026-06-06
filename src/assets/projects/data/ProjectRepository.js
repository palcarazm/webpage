import Singleton from "../../models/Singleton";
import Project from "../model/Project";

class ProjectRepository extends Singleton {
  static get() {
    return [
      // Contributions
      new Project("creecros", "simple_logo_gen"),
      
      // Own projects
      new Project("palcarazm", "bootstrap5-toggle", "bootstrap5-toggle", true, true, true, true),
      new Project("palcarazm", "bs-darkmode-toggle", "bs-darkmode-toggle", true, true, true, true),
      new Project("palcarazm", "batchjs", "batchjs", true, false, true, true),
      new Project("palcarazm", "batchjs-data", "batchjs-data", true, false, true, true),
      new Project("palcarazm", "component-lifecycle", "component-lifecycle", true, false, true, true),
    ];
  }
}

export default ProjectRepository;