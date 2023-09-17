import TimelineObject from "../../models/TimelineObject";
import TranslatedLabel from "../../models/TranslatedLabel";

class Course extends TimelineObject {
  #course;
  #entity;
  #courseLink;

  constructor(course, entity, courseLink, startDate, endDate) {
    super(startDate, endDate);
    if (!course && course.instanceOf(TranslatedLabel))
      throw new Error("The object expect a course.");
    this.#course = course;
    if (!entity) throw new Error("The object expect an entity.");
    this.#entity = entity;
    if (!courseLink) throw new Error("The object expect a course link.");
    this.#courseLink = courseLink;
  }

  get course() {
    return this.#course;
  }
  get entity() {
    return this.#entity;
  }
  get courseLink() {
    return this.#courseLink;
  }
  get key() {
    return `${this.#course.label}-${this.#entity}-${this.timestamp}`;
  }
  set lang(lang) {
    this.#course.lang = lang;
  }
}

export default Course;
