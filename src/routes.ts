import { Router } from 'express'
import ScheduleController from './controllers/ScheduleController'


const routes = Router()

routes.get('/schedule/:date',ScheduleController.find)

export default routes