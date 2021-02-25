import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../database/models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveyUsersRepository extends Repository<SurveyUser> {}

export { SurveyUsersRepository }