class Level {
  #label;
  #value;
  constructor(label, value) {
    if (!label) throw new Error(`The object need a label.`);
    this.#label = label;
    if (!value) throw new Error(`The object need a value.`);
    this.#value = value;
  }

  get label() {
    return this.#label;
  }
  get value() {
    return this.#value;
  }
}

export default Level;
