import { Router } from 'express'
import { CreateClientController } from '../../../../modules/clients/useCases/CreateClientUsecase/CreateClientController'
import { DeleteClientController } from '../../../../modules/clients/useCases/DeleteClientUsecase/DeleteClientController'
import { ListClientsController } from '../../../../modules/clients/useCases/ListClientsUsecase/ListClientsController'
import { UpdateClientController } from '../../../../modules/clients/useCases/UpdateClientUsecase/UpdateClientController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const clientRoutes = Router()

const createClientController = new CreateClientController()
const listClientsController = new ListClientsController()
const deleteClientController = new DeleteClientController()
const updateClientController = new UpdateClientController()

clientRoutes.post('/create', ensureAuthenticated, createClientController.handle)
clientRoutes.get('/list',ensureAuthenticated,  listClientsController.handle)
clientRoutes.delete('/:id', ensureAuthenticated, deleteClientController.handle)
clientRoutes.put('/:id', ensureAuthenticated, updateClientController.handle)

export { clientRoutes }
