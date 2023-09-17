import TimelineObject from "../../models/TimelineObject";

class Certificate extends TimelineObject {
  #certificate;
  #entity;
  #certificateLink;

  constructor(certificate, entity, certificateLink, startDate, endDate) {
    super(startDate, endDate);
    if (!certificate) throw new Error("The object expect a certificate.");
    this.#certificate = certificate;
    if (!entity) throw new Error("The object expect an entity.");
    this.#entity = entity;
    if (!certificateLink)
      throw new Error("The object expect a certificate link.");
    this.#certificateLink = certificateLink;
  }

  get certificate() {
    return this.#certificate;
  }
  get entity() {
    return this.#entity;
  }
  get certificateLink() {
    return this.#certificateLink;
  }
  get key() {
    return `${this.#certificate}-${this.#entity}-${this.timestamp}`;
  }
}

export default Certificate;
