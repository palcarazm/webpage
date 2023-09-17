import { Langs } from "../../plugins";

class TranslatedObject {
  #lang;
  constructor() {}

  set lang(lang) {
    if (Langs.supportedLangs.includes(lang)) {
      this.#lang = lang;
    } else {
      throw new Error(`Unsupported language ${lang}`);
    }
  }
  get lang() {
    return this.#lang;
  }
}
export default TranslatedObject;
