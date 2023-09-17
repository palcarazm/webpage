import LanguageRepository from "../data/LanguageRepository";

class LanguageService {
  constructor() {
    throw new Error(
      `LanguageService is a static class and can't be instantiated`
    );
  }
  static get(lang) {
    return LanguageRepository.get(lang);
  }
}
export default LanguageService;
