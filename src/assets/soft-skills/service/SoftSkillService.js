import Service from "../../models/Service";
import SoftSkillRepository from "../data/SoftSkillRepository";

class SoftSkillService extends Service {}
SoftSkillService.repository = SoftSkillRepository;
export default SoftSkillService;
