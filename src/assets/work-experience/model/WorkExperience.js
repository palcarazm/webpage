import TimelineObject from "../../models/TimelineObject";

class WorkExperience extends TimelineObject {
  #job;
  #employer;
  #place;
  #website;
  #description;

  constructor(job, employer, place, website, startDate, endDate, description) {
    super(startDate, endDate);
    if (!job) throw new Error("The object expect a job.");
    this.#job = job;
    if (!employer) throw new Error("The object expect an employer.");
    this.#employer = employer;
    if (!place) throw new Error("The object expect a place.");
    this.#place = place;
    this.#website = website;
    this.#description = description;
  }

  get job() {
    return this.#job;
  }
  get employer() {
    return this.#employer;
  }
  get place() {
    return this.#place;
  }
  get website() {
    return this.#website;
  }
  get description() {
    return this.#description;
  }
  get key() {
    return `${this.#job}-${this.#employer}-${this.timestamp}`;
  }
}

export default WorkExperience;
