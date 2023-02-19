import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateOrderController } from '../../../../modules/orders/useCases/CreateOrderUsecase/CreateOrderController'
import { ListOrdersController } from '../../../../modules/orders/useCases/ListOrdersUseCase/ListOrdersController'
import { ListOrdersByClientController } from '../../../../modules/orders/useCases/ListOrdersByClient/ListOrdersController'
import { ListOrdersByPeriodController } from '../../../../modules/orders/useCases/ListOrdersByPeriodUsecase/ListOrdersByPeriodController'
import { FindOrderByVoucherCodeController } from '../../../../modules/orders/useCases/FindOrderByVoucherCodeUsecase/FindOrderByVoucherCodeController'
import { DeleteOrderController } from '../../../../modules/orders/useCases/DeleteOrderUsecase/DeleteOrderController'
import { UpdateOrderController } from '../../../../modules/orders/useCases/UpdateOrderUsecase/UpdateOrderController'

export const orderRoutes = Router()

const createOrderController = new CreateOrderController()
const listOrdersController = new ListOrdersController()
const listOrdersByClientController = new ListOrdersByClientController()
const listOrdersByPeriodController = new ListOrdersByPeriodController()
const deleteOrderController = new DeleteOrderController()
const updateOrderController = new UpdateOrderController()
const findOrderByVoucherCodeController = new FindOrderByVoucherCodeController()

orderRoutes.post('/create', ensureAuthenticated, createOrderController.handle)
orderRoutes.get('/list', ensureAuthenticated, listOrdersController.handle)
orderRoutes.get('/list/:client_id', ensureAuthenticated, listOrdersByClientController.handle)
orderRoutes.get('/list-by-period', ensureAuthenticated, listOrdersByPeriodController.handle)
orderRoutes.get('/:voucher_code', ensureAuthenticated, findOrderByVoucherCodeController.handle)
orderRoutes.delete('/:id', ensureAuthenticated, deleteOrderController.handle)
orderRoutes.put('/:id', ensureAuthenticated, updateOrderController.handle)