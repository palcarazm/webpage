import Singleton from "../../models/Singleton";
import Project from "../model/Project";

class ProjectRepository extends Singleton {
  static get() {
    return [
      new Project("creecros", "simple_logo_gen"),
      new Project("awesome-bootstrap-org", "awesome-bootstrap"),
      new Project("palcarazm", "bootstrap5-toggle"),
      new Project("palcarazm", "bs-darkmode-toggle"),
    ];
  }
}
export default ProjectRepository;
