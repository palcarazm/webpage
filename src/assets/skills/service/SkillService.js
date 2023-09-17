import ResultSet from "../../models/ResultSet";
import Service from "../../models/Service";
import CategoryRepository from "../data/CategoryRepository";
import SkillRepository from "../data/SkillRepository";
import Category from "../model/Category";

class SkillService extends Service {
  /**
   * Get skills by category
   * @param {String} lang Language to use
   * @param {Integer} num Number of record to retrieve
   * @param {Category} category Category to filter
   * @returns {ResultSet}
   */
  static getByCategory(lang, num, category) {
    const filterFn = (skill) => skill.category.key === category.key;
    return new ResultSet(
      this.repository.get(lang, num, this.compare, filterFn),
      this.repository.size(lang, filterFn)
    );
  }

  /**
   * Get all skills by category
   * @param {String} lang Language to use
   * @param {Category} category Category to filter
   * @returns {ResultSet}
   */
  static getAllByCategory(lang, category) {
    const filterFn = (skill) => skill.category.key === category.key;
    return new ResultSet(
      this.repository.get(
        lang,
        this.repository.size(lang, filterFn),
        this.compare,
        filterFn
      ),
      this.repository.size(lang, filterFn)
    );
  }

  /**
   * Get all categories
   * @param {String} lang Language to use
   * @returns {ResultSet}
   */
  static getAllCategories(lang) {
    const all = CategoryRepository.getAll(lang);
    return new ResultSet(all, all.length);
  }
}
SkillService.repository = SkillRepository;
export default SkillService;
