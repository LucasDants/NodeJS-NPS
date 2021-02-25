import {Router} from 'express'
import { SendMailController } from './database/controllers/SendMailController';
import { SurveysController } from './database/controllers/SurveysController';
import { UserController } from './database/controllers/UserController'

const router = Router()
const userController = new UserController();
const surveyController = new SurveysController()

const sendMailController = new SendMailController()

router.post('/users', userController.create)

router.post('/surveys', surveyController.create)
router.get('/surveys', surveyController.show)

router.post('/sendMail', sendMailController.execute)

export { router }