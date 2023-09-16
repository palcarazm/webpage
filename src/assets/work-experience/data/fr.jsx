import { ListGroup } from "react-bootstrap";
import WorkExperience from "../model/WorkExperience";
import { Langs } from "../../../plugins";

const fr = [
  new WorkExperience(
    "Analyste fonctionnel (BA)",
    "Sopra Steria",
    "Valencia - Espagne",
    "http://www.soprasteria.com/",
    new Date("2023-01-01"),
    null,
    (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">
            Ene. 2023 - Actualité
          </span>
          Analyste fonctionnel pour l'adaptation au standard de interopérabilité
          européen (STI) de SNCF Réseau.
        </ListGroup.Item>
      </ListGroup>
    )
  ),
  new WorkExperience(
    "Ingénieur de test de software (QA)",
    "Sopra Steria",
    "Valencia - Espagne",
    "http://www.soprasteria.com/",
    new Date("2021-09-19"),
    new Date("2021-12-31"),
    (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">Abr. 2022 - Dec.2022</span>
          Ingénieur de test de software pour l'application d'échanges
          inter-banquières de Société General.
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-body-secondary pe-2">
            Sept. 2021 - Mar.2022
          </span>
          Ingénieur de test de software pour l'application de support pour le
          Marché des a clients particuliers d'Énergie de France (EdF).
        </ListGroup.Item>
      </ListGroup>
    )
  ),
  new WorkExperience(
    "Technicien du Domaine de la Qualité Académique",
    "Universidad Internacional de Valencia",
    "Valencia - Espagne",
    null,
    new Date("2021-03-01"),
    new Date("2021-08-31"),
    null
  ),
  new WorkExperience(
    "Président",
    "CREUP – Coordinadora de Representantes de Estudiantes de Universidades Públicas",
    "Alcalá de Henares - Madrid - Espagne",
    null,
    new Date("2018-11-30"),
    new Date("2020-07-29"),
    null
  ),
  new WorkExperience(
    "Représentant des élèves",
    "Universitat Politècnica de València",
    "Valencia - Espagne",
    null,
    new Date("2017-12-31"),
    new Date("2018-12-31"),
    null
  ),
];
fr.forEach((workExperience) => (workExperience.lang = Langs.fr));

export default fr;
