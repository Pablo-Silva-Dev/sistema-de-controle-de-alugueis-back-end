import { Router } from 'express';
import { CreateAdmController } from '../../../../modules/administrators/useCases/CreateAdmUsecase/CreateAdmController';
import { ListAdmsController } from '../../../../modules/administrators/useCases/ListAdmsUseCase/ListAdmsController';
import { UpdateAdmController } from '../../../../modules/administrators/useCases/UpdateAdmUsecase/UpdateAdmController';
import { DeleteAdmController } from './../../../../modules/administrators/useCases/DeleteAdmUsecase/DeleteAdmController';
import { AuthenticateAdmController } from '../../../../modules/administrators/useCases/AuthenticateAdmUsecase/AuthenticateAdmController'
import { SendForgotPasswordEmailController } from '../../../../modules/administrators/useCases/SendForgotPasswordEmailUsecase/SendForgotPasswordEmailController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const administratorsRoutes = Router()

const createAdmController = new CreateAdmController()
const listAdmsController = new ListAdmsController()
const deleteAdmController = new DeleteAdmController()
const updateAdmController = new UpdateAdmController()
const authenticateAdmController = new AuthenticateAdmController()
const sendForgotPasswordEmailController = new SendForgotPasswordEmailController()

administratorsRoutes.post('/create', ensureAuthenticated, createAdmController.handle)
administratorsRoutes.post('/auth', authenticateAdmController.handle)
administratorsRoutes.get('/list', ensureAuthenticated, listAdmsController.handle)
administratorsRoutes.delete('/:id', ensureAuthenticated, deleteAdmController.handle)
administratorsRoutes.put('/', ensureAuthenticated, updateAdmController.handle)
administratorsRoutes.post('/redefine-password', sendForgotPasswordEmailController.handle)

export { administratorsRoutes };

