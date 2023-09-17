import Level from "../model/Level";

const Levels = new Map()
  .set("A1", new Level("A1", 1))
  .set("A2", new Level("A2", 2))
  .set("B1", new Level("B1", 3))
  .set("B2", new Level("B2", 4))
  .set("C1", new Level("C1", 5))
  .set("C2", new Level("C2", 6));

const maxLevel = 6;

export default Levels;
export { maxLevel };
