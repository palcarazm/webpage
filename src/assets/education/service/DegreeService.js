import DegreeRepository from "../data/DegreeRepository";

class DegreeService {
  constructor() {
    throw new Error(
      `DegreeService is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    return DegreeRepository.get(lang).sort(
      (previous, current) => current.startDate - previous.startDate
    );
  }
}
export default DegreeService;
