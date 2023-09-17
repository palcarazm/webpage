import { Langs } from "../../plugins";
import TranslatedObject from "./TranslatedObject";

class TranslatedLabel extends TranslatedObject {
  #es;
  #fr;

  constructor(es, fr) {
    super();
    if (!es) throw new Error("The object expect a es.");
    this.#es = es;
    if (!fr) throw new Error("The object expect a fr.");
    this.#fr = fr;
  }

  get label() {
    switch (this.lang) {
      case Langs.fr:
        return this.#fr;
      case Langs.es:
      default:
        return this.#es;
    }
  }
}
export default TranslatedLabel;
