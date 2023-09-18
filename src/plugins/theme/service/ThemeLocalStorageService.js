import Singleton from "../../../assets/models/Singleton";
import { Themes } from "../constants";

const key = "theme";

class ThemeLocalStorageService extends Singleton {
  static getTheme() {
    return JSON.parse(localStorage.getItem(key));
  }
  static setTheme(theme) {
    if (Themes.supported.includes(theme)) {
      localStorage.setItem(key, JSON.stringify(theme));
    }
  }
}
export default ThemeLocalStorageService;
