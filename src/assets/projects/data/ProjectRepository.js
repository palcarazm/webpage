import Project from "../model/Project";

class ProjectRepository {
  constructor() {
    throw new Error(
      `ProjectRepository is a static class and can't be instantiated`
    );
  }

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
