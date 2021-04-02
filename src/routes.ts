import { Router } from 'express'
import ScheduleController from './controllers/ScheduleController'


const routes = Router()

routes.get('/orphanages/:date',ScheduleController.find)

export default routes