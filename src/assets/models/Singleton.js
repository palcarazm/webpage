class Singleton {
  constructor() {
    throw new Error(
      `${this.constructor.name} cannot be instantiated as is a singleton.`
    );
  }
}
export default Singleton;
