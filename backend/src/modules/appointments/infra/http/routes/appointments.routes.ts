/* eslint-disable @typescript-eslint/camelcase */
import { Router } from 'express'

import AppointmentsController from '../controller/AppointmentsController'
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()

appointmentsRouter.use(ensureAuthenticaded)

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find()

//   return response.json(appointments)
// })

appointmentsRouter.post('/', appointmentsController.create)

export default appointmentsRouter
