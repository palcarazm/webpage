import Skill from "../model/Skill";
import CategoryRepository from "./CategoryRepository";

const commons = [
  new Skill("HTML", 5, CategoryRepository.get("dev")),
  new Skill("CSS", 5, CategoryRepository.get("dev")),
  new Skill("JS ECMAS", 4, CategoryRepository.get("dev")),
  new Skill("JS jQuery", 4, CategoryRepository.get("dev")),
  new Skill("SQL", 4, CategoryRepository.get("dev")),
  new Skill("PHP", 2, CategoryRepository.get("dev")),
];

export default commons;
