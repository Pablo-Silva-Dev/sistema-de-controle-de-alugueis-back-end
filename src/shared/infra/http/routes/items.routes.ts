import multer from 'multer';
import { multerConfig } from '../../../../config/multer'

import { FindItemByIdController } from './../../../../modules/items/useCases/FindItemByIdUsecase/FindItemByIdController';
import { Router } from 'express'
import { CreateItemController } from '../../../../modules/items/useCases/CreateItemUsecase/CreateItemController'
import { DeleteItemController } from '../../../../modules/items/useCases/DeleteItemUsecase/DeleteItemController'
import { ListItemsController } from '../../../../modules/items/useCases/ListItemsUseCase/ListItemsController'
import { UpdateItemController } from '../../../../modules/items/useCases/UpdateItemUse/UpdateItemController'
import { UpdateItemStockController } from '../../../../modules/items/useCases/UpdateItemStockUsecase/UpdateItemStockController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const itemsRoutes = Router()

const upload = multer({
    storage: multerConfig
})

const createItemController = new CreateItemController()
const listItemsController = new ListItemsController()
const deleteItemController = new DeleteItemController()
const updateItemController = new UpdateItemController()
const updateItemStockController = new UpdateItemStockController()
const findItemByIdController = new FindItemByIdController()

itemsRoutes.post(
    '/create',
    ensureAuthenticated,
    upload.single('image'),
    createItemController.handle
)
itemsRoutes.get('/list',  listItemsController.handle)
itemsRoutes.get('/:id', findItemByIdController.handle)
itemsRoutes.delete('/:id', ensureAuthenticated, deleteItemController.handle)
itemsRoutes.put('/:id', ensureAuthenticated, updateItemController.handle)
itemsRoutes.put('/stock/:id', ensureAuthenticated, updateItemStockController.handle)

export { itemsRoutes }

