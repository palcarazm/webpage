import TimelineObject from "../../models/TimelineObject";

class Degree extends TimelineObject {
  #center;
  #study;
  #place;
  #website;

  constructor(center, study, place, website, startDate, endDate) {
    super(startDate, endDate);
    if (!center) throw new Error("The object expect a center.");
    this.#center = center;
    if (!study) throw new Error("The object expect an study.");
    this.#study = study;
    if (!place) throw new Error("The object expect a place.");
    this.#place = place;
    this.#website = website;
  }

  get center() {
    return this.#center;
  }
  get study() {
    return this.#study;
  }
  get place() {
    return this.#place;
  }
  get website() {
    return this.#website;
  }
  get key() {
    return `${this.#center}-${this.#study}-${this.timestamp}`;
  }
}

export default Degree;
