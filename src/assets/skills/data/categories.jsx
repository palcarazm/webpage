import {
  faCube,
  faDesktop,
  faTerminal,
  faVialCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Category from "../model/Category";

const categories = new Map()
  .set(
    "dev",
    new Category(
      "dev",
      <FontAwesomeIcon icon={faTerminal} className="me-2" />,
      "Desarrollo",
      "Développement"
    )
  )
  .set(
    "testing",
    new Category(
      "testing",
      <FontAwesomeIcon icon={faVialCircleCheck} className="me-2" />,
      "Pruebas",
      "Testing"
    )
  )
  .set(
    "frameworks",
    new Category(
      "frameworks",
      <FontAwesomeIcon icon={faCube} className="me-2" />,
      "Frameworks",
      "Frameworks"
    )
  )
  .set(
    "software",
    new Category(
      "software",
      <FontAwesomeIcon icon={faDesktop} className="me-2" />,
      "Software",
      "Software"
    )
  );

export default categories;
