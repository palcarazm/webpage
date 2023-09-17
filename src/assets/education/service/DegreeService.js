import Service from "../../models/Service";
import DegreeRepository from "../data/DegreeRepository";

class DegreeService extends Service {}
DegreeService.repository = DegreeRepository;
export default DegreeService;
