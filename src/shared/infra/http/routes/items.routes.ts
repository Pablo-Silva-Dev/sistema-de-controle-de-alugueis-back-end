import { Router } from 'express'
import { CreateItemController } from '../../../../modules/items/useCases/CreateItemUsecase/CreateItemController'
import { DeleteItemController } from '../../../../modules/items/useCases/DeleteItemUsecase/DeleteItemController'
import { ListItemsController } from '../../../../modules/items/useCases/ListItemsUseCase/ListItemsController'
import { UpdateItemController } from '../../../../modules/items/useCases/UpdateItemUse/UpdateItemController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const itemsRoutes = Router()


const createItemController = new CreateItemController()
const listItemsController = new ListItemsController()
const deleteItemController = new DeleteItemController()
const updateItemController = new UpdateItemController()

itemsRoutes.post('/create', ensureAuthenticated, createItemController.handle)
itemsRoutes.get('/list', ensureAuthenticated, listItemsController.handle)
itemsRoutes.delete('/:id', ensureAuthenticated, deleteItemController.handle)
itemsRoutes.put('/:id', ensureAuthenticated, updateItemController.handle)

export { itemsRoutes }

