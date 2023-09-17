import TranslatedObject from "../../models/TranslatedObject";
import LanguageName from "./LanguageName";
import Level from "./Level";

class Language extends TranslatedObject {
  #language;
  #level;

  constructor(language, level) {
    super();

    if (!language && !language.instanceOf(LanguageName))
      throw new Error(`The object need a language instance of LanguageName.`);
    this.#language = language;

    if (!level && !language.instanceOf(Level))
      throw new Error(`The object need a level instance of Level.`);
    this.#level = level;
  }
  get language() {
    return this.#language.get(this.lang);
  }
  get level() {
    return this.#level;
  }
  get key() {
    return this.#language.get(this.lang);
  }
}

export default Language;
