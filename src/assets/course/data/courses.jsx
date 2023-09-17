import TranslatedLabel from "../../models/TranslatedLabel";
import Course from "../model/Course";

const courses = [
  new Course(
    new TranslatedLabel(
      "Cypress. Master en automatización de pruebas",
      "Cypress. Master en automatisation de test"
    ),
    "Udemy",
    "https://ude.my/UC-e733e840-8538-4428-a628-a3bdf151315a",
    new Date("2022-06-01"),
    new Date("2022-07-01")
  ),
  new Course(
    new TranslatedLabel(
      "Pruebas funcionales a API REST: SoapUI",
      "Tests fonctionnels d'API REST : SoapUI"
    ),
    "Udemy",
    "https://ude.my/UC-a7ea7bd5-5a2a-4f59-8db3-9d8d6338cfa8",
    new Date("2021-09-01"),
    new Date("2021-10-01")
  ),
  new Course(
    new TranslatedLabel(
      "Software Testing de aplicaciones. Postman. Testing de API",
      "Test de logiciels. Postmann. Test d'API"
    ),
    "Udemy",
    "http://ude.my/UC-e1372256-ceba-4184-9a6f-4dd95aefc57e",
    new Date("2021-09-01"),
    new Date("2021-10-01")
  ),
  new Course(
    new TranslatedLabel(
      "Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL",
      "Développement Web complet avec HTML5, CSS3, JS, AJAX, PHP et MySQL"
    ),
    "Udemy",
    "https://ude.my/UC-8d56daf5-f722-4266-ab3c-7a08a8705e68",
    new Date("2021-01-01"),
    new Date("2021-10-01")
  ),
  new Course(
    new TranslatedLabel(
      "Hadoop Big Data desde cero",
      "Hadoop Big Data à partir de zéro"
    ),
    "Udemy",
    "http://ude.my/UC-8000dd00-3a1a-4bf7-b0a5-c77cb8829a29",
    new Date("2021-02-01"),
    new Date("2021-03-01")
  ),
  new Course(
    new TranslatedLabel(
      "Administración de Proyectos con MS Project de Cero a Avanzado",
      "Gestion de projets avec MS Project de zéro à avancé"
    ),
    "Udemy",
    "http://ude.my/UC-db6480de-95b4-429a-b072-51a002416d7f",
    new Date("2021-02-01"),
    new Date("2021-03-01")
  ),
  new Course(
    new TranslatedLabel(
      "GIT+GitHub: Todo un sistema de control de versiones de cero",
      "GIT+GitHub : un système de contrôle de versions complet à partir de zéro"
    ),
    "Udemy",
    "http://ude.my/UC-6b8f834f-61cd-46b8-9860-5052cc771159",
    new Date("2021-01-01"),
    new Date("2021-02-01")
  ),
];

export default courses;
