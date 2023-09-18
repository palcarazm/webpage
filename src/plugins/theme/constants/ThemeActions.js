import Singleton from "../../../assets/models/Singleton";

class ThemeActions extends Singleton {
  static get set() {
    return "SET_THEME";
  }
}
export default ThemeActions;
