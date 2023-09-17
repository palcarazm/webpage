import LanguageName from "../model/LanguageName";

const LanguageNames = new Map()
  .set("ES", new LanguageName("Español", "Espagnol"))
  .set("FR", new LanguageName("Francés", "Français"))
  .set("EN", new LanguageName("Inglés", "Anglais"));

export default LanguageNames;
