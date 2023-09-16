class Langs {
  constructor() {
    throw new Error(`Langs is a static class and can't be instantiated`);
  }

  static get default() {
    return Langs.es;
  }

  static get supportedLangs() {
    return [Langs.es, Langs.fr];
  }

  static get es() {
    return "es-ES";
  }
  static get fr() {
    return "fr-FR";
  }
}
export default Langs;
