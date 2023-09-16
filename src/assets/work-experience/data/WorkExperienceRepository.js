import { Langs } from "../../../plugins";
import es from "./es";
import fr from "./fr";

class WorkExperienceRepository {
  constructor() {
    throw new Error(
      `WorkExperienceRepository is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    switch (lang) {
      case Langs.fr:
        return fr;
      case Langs.es:
      default:
        return es;
    }
  }
}
export default WorkExperienceRepository;
