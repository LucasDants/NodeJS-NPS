import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../database/models/Surveys";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository }