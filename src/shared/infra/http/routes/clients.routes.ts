import { Router } from 'express'
import { CreateClientController } from '../../../../modules/clients/useCases/CreateClientUsecase/CreateClientController'
import { DeleteClientController } from '../../../../modules/clients/useCases/DeleteClientUsecase/DeleteClientController'
import { ListClientsController } from '../../../../modules/clients/useCases/ListClientsUsecase/ListClientsController'
import { UpdateClientController } from '../../../../modules/clients/useCases/UpdateClientUsecase/UpdateClientController'
import { SendOrderGettingCloseEmailController } from '../../../../modules/clients/useCases/SendOrderGettingCloseEmailUsecase/SendOrderGettingCloseEmailController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const clientRoutes = Router()

const createClientController = new CreateClientController()
const listClientsController = new ListClientsController()
const deleteClientController = new DeleteClientController()
const updateClientController = new UpdateClientController()
const sendOrderGettingCloseEmailController = new SendOrderGettingCloseEmailController()

clientRoutes.post('/create', ensureAuthenticated, createClientController.handle)
clientRoutes.get('/list', ensureAuthenticated, listClientsController.handle)
clientRoutes.delete('/:id', ensureAuthenticated, deleteClientController.handle)
clientRoutes.put('/:id', ensureAuthenticated, updateClientController.handle)
clientRoutes.post(
    '/send-order-getting-close-email',
    ensureAuthenticated,
    sendOrderGettingCloseEmailController.handle
)

export { clientRoutes }
