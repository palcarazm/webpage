import Service from "../../models/Service";
import LanguageRepository from "../data/LanguageRepository";

class LanguageService extends Service {}
LanguageService.repository = LanguageRepository;
export default LanguageService;
