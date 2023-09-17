import { Langs } from "../../../plugins";
import Skill from "../model/Skill";
import CategoryRepository from "./CategoryRepository";
import commons from "./commons";

const es = [
  ...commons,
  new Skill("Pruebas de interfaz", 3, CategoryRepository.get("testing")),
  new Skill("Pruebas de API", 4, CategoryRepository.get("testing")),
  new Skill("Pruebas de Batch", 3, CategoryRepository.get("testing")),
  new Skill(
    "Diseño de estrategia de pruebas",
    3,
    CategoryRepository.get("testing")
  ),
];
es.forEach((skill) => (skill.lang = Langs.es));

export default es;
