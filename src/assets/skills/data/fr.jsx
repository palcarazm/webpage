import { Langs } from "../../../plugins";
import Skill from "../model/Skill";
import CategoryRepository from "./CategoryRepository";
import commons from "./commons";

const fr = [
  ...commons,
  new Skill("Test de IHM", 3, CategoryRepository.get("testing")),
  new Skill("Test de API", 4, CategoryRepository.get("testing")),
  new Skill("Test de Batch", 3, CategoryRepository.get("testing")),
  new Skill(
    "Conception de stratégie de test",
    3,
    CategoryRepository.get("testing")
  ),
];
fr.forEach((skill) => (skill.lang = Langs.fr));

export default fr;
