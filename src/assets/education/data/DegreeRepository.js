import { Langs } from "../../../plugins";
import es from "./es";
import fr from "./fr";

class DegreeRepository {
  constructor() {
    throw new Error(
      `DegreeRepository is a static class and can't be instantiated`
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
export default DegreeRepository;
