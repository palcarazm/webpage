import { Langs } from "../../../plugins";

class LanguageName {
  #es;
  #fr;
  constructor(es, fr) {
    if (!es) throw new Error(`The object need a es.`);
    this.#es = es;
    if (!fr) throw new Error(`The object need a fr.`);
    this.#fr = fr;
  }
  get(lang) {
    switch (lang) {
      case Langs.fr:
        return this.#fr;
      case Langs.es:
      default:
        return this.#es;
    }
  }
}

export default LanguageName;
