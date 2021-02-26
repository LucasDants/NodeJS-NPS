import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveyUsersRepository } from "../repositories/SurveysUserRepository";


class NpsController {
    async execute(request: Request, response: Response) {
        const { survey_id } = request.params
        const surveysUsersRepository = getCustomRepository(SurveyUsersRepository)

       const surveysUsers =  await surveysUsersRepository.find({survey_id, value: Not(IsNull())})
        
       const detractors = surveysUsers.filter(survey => survey.value <= 6 && survey.value >= 0).length
       const passives = surveysUsers.filter(survey => survey.value <= 8 && survey.value >= 7).length
       const promotors = surveysUsers.filter(survey => survey.value <= 10 && survey.value >= 9).length

       const totalAnswers = surveysUsers.length

       const nps = Number((((promotors - detractors)/totalAnswers) * 100).toFixed(2))

       return response.json({
           detractors,
           passives,
           promotors,
           totalAnswers,
           nps
       })
    }
}

export { NpsController }