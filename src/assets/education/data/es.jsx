import { Langs } from "../../../plugins";
import Degree from "../model/Degree";

const es = [
  new Degree(
    "Universitat Politècnica de València",
    "Master Universitario en Ingeniería Aeronáutica",
    "Valencia - España",
    "https://www.upv.es",
    new Date("2018-09-30"),
    new Date("2021-09-30")
  ),
  new Degree(
    "Universitat Politècnica de València",
    "Grado en Ingeniería Aeroespacial",
    "Valencia - España",
    "https://www.upv.es",
    new Date("2013-08-31"),
    new Date("2018-06-29")
  ),
];
es.forEach((degree) => (degree.lang = Langs.es));

export default es;
