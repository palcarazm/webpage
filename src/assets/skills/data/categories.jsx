import {
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
  );

export default categories;
