import TranslatedObject from "./TranslatedObject";

const dateFormatOptions = {
  month: "short",
  year: "numeric",
};

class TimelineObject extends TranslatedObject {
  #startDate;
  #endDate;

  constructor(startDate, endDate) {
    super();
    if (!startDate) throw new Error(`The object need a start date.`);
    this.#startDate = startDate;
    this.#endDate = endDate;
  }

  get timestamp() {
    return `${this.#startDate.toUTCString()}-${
      this.#endDate ? this.#endDate.toUTCString() : ""
    }`;
  }

  get startDate() {
    return this.#startDate;
  }
  get endDate() {
    return this.#endDate;
  }

  get formattedStartDate() {
    return this.#startDate.toLocaleDateString(this.lang, dateFormatOptions);
  }
  get formattedEndDate() {
    return this.#endDate.toLocaleDateString(this.lang, dateFormatOptions);
  }

  get period() {
    if (this.#endDate) {
      return `${this.formattedStartDate} - ${this.formattedEndDate}`;
    } else {
      return `${this.formattedStartDate}`;
    }
  }
}

export default TimelineObject;
