const dateFormatOptions = {
  month: "short",
  year: "numeric",
};

class WorkExperience {
  #job;
  #employer;
  #place;
  #website;
  #start;
  #end;
  #description;
  #lang;

  constructor(job, employer, place, website, start, end, description) {
    this.#job = job;
    this.#employer = employer;
    this.#place = place;
    this.#website = website;
    this.#start = start;
    this.#end = end;
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
  get startDate() {
    return this.#start;
  }
  get endDate() {
    return this.#end;
  }
  get description() {
    return this.#description;
  }
  get key() {
    return `${this.#job}-${this.#employer}-${this.#start.toUTCString()}`;
  }
  get period() {
    if (this.#end) {
      return `${this.#start.toLocaleDateString(
        this.#lang,
        dateFormatOptions
      )} - ${this.#end.toLocaleDateString(this.#lang, dateFormatOptions)}`;
    } else {
      return `${this.#start.toLocaleDateString(this.#lang, dateFormatOptions)}`;
    }
  }

  set lang(lang) {
    this.#lang = lang;
  }
}

export default WorkExperience;
