import Singleton from "../../models/Singleton";
import Category from "../model/Category";
import categories from "./categories";

class CategoryRepository extends Singleton {
  static get(key) {
    return categories.get(key);
  }
  static getAll(lang) {
    return Array.from(categories.values()).map((category) => {
      category.lang = lang;
      return category;
    });
  }
}
export default CategoryRepository;
