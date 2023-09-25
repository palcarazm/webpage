import Singleton from "../../../assets/models/Singleton";

class Themes extends Singleton {
  static get default() {
    return Themes.light;
  }

  static get supported() {
    return [Themes.light, Themes.dark];
  }

  static get light() {
    return "light";
  }

  static get dark() {
    return "dark";
  }
}
export default Themes;
