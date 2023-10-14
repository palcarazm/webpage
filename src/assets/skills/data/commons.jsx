import Skill from "../model/Skill";
import CategoryRepository from "./CategoryRepository";

const dev = [
  new Skill("HTML", 5, CategoryRepository.get("dev")),
  new Skill("CSS", 5, CategoryRepository.get("dev")),
  new Skill("JS", 4, CategoryRepository.get("dev")),
  new Skill("SQL", 4, CategoryRepository.get("dev")),
  new Skill("PHP", 2, CategoryRepository.get("dev")),
];

const frameworks = [
  new Skill("Bootstrap", 5, CategoryRepository.get("frameworks")),
  new Skill("jQuery", 4, CategoryRepository.get("frameworks")),
  new Skill("ReactJS", 3, CategoryRepository.get("frameworks")),
  new Skill("Cypress", 4, CategoryRepository.get("frameworks")),
];

const software = [
  new Skill("Jira", 5, CategoryRepository.get("software")),
  new Skill("Confluence", 5, CategoryRepository.get("software")),
  new Skill("Jira XRay", 3, CategoryRepository.get("software")),
  new Skill("Microfocus ALM", 3, CategoryRepository.get("software")),
  new Skill("Postman", 3, CategoryRepository.get("software")),
  new Skill("PlantUML", 4, CategoryRepository.get("software")),
];

const commons = [...dev, ...frameworks, ...software];

export default commons;
