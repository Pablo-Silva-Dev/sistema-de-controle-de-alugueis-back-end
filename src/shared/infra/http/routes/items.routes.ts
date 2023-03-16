import { FindItemByIdController } from './../../../../modules/items/useCases/FindItemByIdUsecase/FindItemByIdController';
import { Router } from 'express'
import { CreateItemController } from '../../../../modules/items/useCases/CreateItemUsecase/CreateItemController'
import { DeleteItemController } from '../../../../modules/items/useCases/DeleteItemUsecase/DeleteItemController'
import { ListItemsController } from '../../../../modules/items/useCases/ListItemsUseCase/ListItemsController'
import { UpdateItemController } from '../../../../modules/items/useCases/UpdateItemUse/UpdateItemController'
import { UpdateItemStockController } from '../../../../modules/items/useCases/UpdateItemStockUsecase/UpdateItemStockController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const itemsRoutes = Router()


const createItemController = new CreateItemController()
const listItemsController = new ListItemsController()
const deleteItemController = new DeleteItemController()
const updateItemController = new UpdateItemController()
const updateItemStockController = new UpdateItemStockController()
const findItemByIdController = new FindItemByIdController()

itemsRoutes.post('/create', ensureAuthenticated, createItemController.handle)
itemsRoutes.get('/list', ensureAuthenticated, listItemsController.handle)
itemsRoutes.get('/find/:id', findItemByIdController.handle)
itemsRoutes.delete('/:id', ensureAuthenticated, deleteItemController.handle)
itemsRoutes.put('/:id', ensureAuthenticated, updateItemController.handle)
itemsRoutes.put('/stock/:id', ensureAuthenticated, updateItemStockController.handle)

export { itemsRoutes }

