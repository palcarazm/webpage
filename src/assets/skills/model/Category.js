import { Langs } from "../../../plugins";
import TranslatedObject from "../../models/TranslatedObject";

class Category extends TranslatedObject {
  #key;
  #icon;
  #es;
  #fr;
  constructor(key, icon, es, fr) {
    super();
    if (!key) throw new Error(`The object need a key.`);
    this.#key = key;
    if (!icon) throw new Error(`The object need a icon.`);
    this.#icon = icon;
    if (!es) throw new Error(`The object need a es.`);
    this.#es = es;
    if (!fr) throw new Error(`The object need a fr.`);
    this.#fr = fr;
  }
  get category() {
    switch (this.lang) {
      case Langs.fr:
        return this.#fr;
      case Langs.es:
      default:
        return this.#es;
    }
  }
  get key() {
    return this.#key;
  }
  get icon() {
    return this.#icon;
  }
}
export default Category;
