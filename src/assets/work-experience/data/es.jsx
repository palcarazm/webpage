import { ListGroup } from "react-bootstrap";
import WorkExperience from "../model/WorkExperience";
import { Langs } from "../../../plugins";

const es = [
  new WorkExperience(
    "Analista funcional (BA)",
    "Sopra Steria",
    "Valencia - España",
    "http://www.soprasteria.com/",
    new Date("2023-01-01"),
    null,
    (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">
            Ene. 2023 - Actualidad
          </span>
          Analista funcional en la adaptación de la SNCF al estándar de
          interoperatividad europeo (STI).
        </ListGroup.Item>
      </ListGroup>
    )
  ),
  new WorkExperience(
    "Ingeniero de pruebas de software (QA)",
    "Sopra Steria",
    "Valencia - España",
    "http://www.soprasteria.com/",
    new Date("2021-09-19"),
    new Date("2021-12-31"),
    (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">Abr. 2022 - Dec.2022</span>
          Ingeniero de pruebas en la aplicación de intercambios internacionales
          de Société General.
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">
            Sept. 2021 - Mar.2022
          </span>
          Ingeniero de pruebas en la aplicación de soporte a clientes
          particulares de Énergie de France (EdF).
        </ListGroup.Item>
      </ListGroup>
    )
  ),
  new WorkExperience(
    "Técnico de Calidad Académica",
    "Universidad Internacional de Valencia",
    "Valencia - España",
    null,
    new Date("2021-03-01"),
    new Date("2021-08-31"),
    null
  ),
  new WorkExperience(
    "Presidente",
    "CREUP – Coordinadora de Representantes de Estudiantes de Universidades Públicas",
    "Alcalá de Henares - Madrid - España",
    null,
    new Date("2018-11-30"),
    new Date("2020-07-29"),
    null
  ),
  new WorkExperience(
    "Delegado de Alumnos",
    "Universitat Politècnica de València",
    "Valencia - España",
    null,
    new Date("2017-12-31"),
    new Date("2018-12-31"),
    null
  ),
];
es.forEach((workExperience) => (workExperience.lang = Langs.es));

export default es;
