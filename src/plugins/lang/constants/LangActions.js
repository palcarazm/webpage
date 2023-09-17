class LangActions {
  constructor() {
    throw new Error(`LangActions is a static class and can't be instantiated`);
  }

  static get set() {
    return "SET_LANG";
  }
}
export default LangActions;
