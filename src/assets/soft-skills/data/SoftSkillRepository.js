import Repository from "../../models/Repository";
import SoftSkill from "../model/SoftSkill";

const softSkills = [
  new SoftSkill("Trabajo en equipo", "Travail en equipe"),
  new SoftSkill("Resolución de problemas", "Résolution de problèmes"),
  new SoftSkill(
    "Gestión y Organización del tiempo",
    "Gestion et organisation du temps"
  ),
];

class SoftSkillRepository extends Repository {
  /**
   * Retrieve the requested number of records
   * @param {String} lang Language to use
   * @param {Integer} num Desired number of records
   * @param {Function} sortFn Sorting function
   * @returns {Array<Object>}
   */
  static get(lang, num, sortFn) {
    return SoftSkillRepository.#get(lang).toSorted(sortFn).slice(0, num);
  }

  /**
   * Get the number of records
   * @param {String} lang Language to use
   * @returns {Integer}
   */
  static size(lang) {
    SoftSkillRepository.#get(lang).length;
  }

  static #get(lang) {
    return softSkills.map((softSkill) => {
      softSkill.lang = lang;
      return softSkill;
    });
  }
}
export default SoftSkillRepository;
