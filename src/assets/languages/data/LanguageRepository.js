import Language from "../model/Language";
import LanguageNames from "./LanguageNameRepository";
import Levels from "./LevelRepository";

const Languages = [
  new Language(LanguageNames.get("ES"), Levels.get("C2")),
  new Language(LanguageNames.get("FR"), Levels.get("C1")),
  new Language(LanguageNames.get("EN"), Levels.get("B2")),
];

class LanguageRepository {
  constructor() {
    throw new Error(
      `LanguageRepository is a static class and can't be instantiated`
    );
  }

  static get(lang) {
    return Languages.map((language) => {
      language.lang = lang;
      return language;
    });
  }
}

export default LanguageRepository;
