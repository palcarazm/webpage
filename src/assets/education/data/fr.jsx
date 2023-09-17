import { Langs } from "../../../plugins";
import Degree from "../model/Degree";

const fr = [
  new Degree(
    "Universitat Politècnica de València",
    "Master en Ingénierie Aéronautique",
    "Valencia - Espagne",
    "https://www.upv.es",
    new Date("2018-09-30"),
    new Date("2021-09-30")
  ),
  new Degree(
    "Universitat Politècnica de València",
    "Diplôme en Ingénierie Aérospatial",
    "Valencia - Espagne",
    "https://www.upv.es",
    new Date("2013-08-31"),
    new Date("2018-06-29")
  ),
];
fr.forEach((degree) => (degree.lang = Langs.fr));

export default fr;
