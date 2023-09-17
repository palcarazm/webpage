import Category from "./Category";

class Skill {
  #label;
  #level;
  #category;

  constructor(label, level, category) {
    if (!label) throw new Error("The object expect a label.");
    this.#label = label;
    if (!level) throw new Error("The object expect an level.");
    this.#level = level;
    if (!category && category.instanceOf(Category))
      throw new Error("The object expect an category.");
    this.#category = category;
  }

  get label() {
    return this.#label;
  }
  get level() {
    return this.#level;
  }
  get category() {
    return this.#category;
  }
  get key() {
    return this.#label;
  }
  set lang(lang) {
    this.#category.lang = lang;
  }
}

export default Skill;
