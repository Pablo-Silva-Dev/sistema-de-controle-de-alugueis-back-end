import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateOrderController } from '../../../../modules/orders/useCases/CreateOrderUsecase/CreateOrderController'
import { ListOrdersController } from '../../../../modules/orders/useCases/ListOrdersUseCase/ListOrdersController'
import { ListOrdersByClientController } from '../../../../modules/orders/useCases/ListOrdersByClient/ListOrdersController'
import { ListOrdersByPeriodController } from '../../../../modules/orders/useCases/ListOrdersByPeriodUsecase/ListOrdersByPeriodController'
import { FindOrderByVoucherCodeController } from '../../../../modules/orders/useCases/FindOrderByVoucherCodeUsecase/FindOrderByVoucherCodeController'
import { DeleteOrderController } from '../../../../modules/orders/useCases/DeleteOrderUsecase/DeleteOrderController'
import { UpdateOrderController } from '../../../../modules/orders/useCases/UpdateOrderUsecase/UpdateOrderController'
import { ListFinishedOrdersController } from '../../../../modules/orders/useCases/ListFinishedOrders/ListFinishedOrdersController'
import { ListActiveOrdersController } from '../../../../modules/orders/useCases/ListActiveOrders/ListActiveOrdersController'
import { ListLateOrdersController } from '../../../../modules/orders/useCases/ListLateOrders/ListLateOrdersController'
import { ListNextToExpireOrdersController } from '../../../../modules/orders/useCases/ListNextToExpireOrders/ListLateOrdersController'
import { ListOrdersByPeriodAndStatusController } from '../../../../modules/orders/useCases/ListOrdersByPeriodAndStatusUsecase/ListOrdersByPeriodAndStatusController'
import { FinishOrderController } from '../../../../modules/orders/useCases/FinishOrderUsecase/FinishOrderController'

export const orderRoutes = Router()

const createOrderController = new CreateOrderController()
const listOrdersController = new ListOrdersController()
const listOrdersByClientController = new ListOrdersByClientController()
const listOrdersByPeriodController = new ListOrdersByPeriodController()
const listOrdersByPeriodAndStatusController = new ListOrdersByPeriodAndStatusController()
const deleteOrderController = new DeleteOrderController()
const updateOrderController = new UpdateOrderController()
const findOrderByVoucherCodeController = new FindOrderByVoucherCodeController()
const listFinishedOrdersController = new ListFinishedOrdersController()
const listActiveOrdersController = new ListActiveOrdersController()
const listLateOrdersController = new ListLateOrdersController()
const listNextToExpireOrdersController = new ListNextToExpireOrdersController()
const finishOrderController = new FinishOrderController()

orderRoutes.post('/create', ensureAuthenticated, createOrderController.handle)
orderRoutes.get('/list', ensureAuthenticated, listOrdersController.handle)
orderRoutes.get('/list-finished', ensureAuthenticated, listFinishedOrdersController.handle)
orderRoutes.get('/list-active', ensureAuthenticated, listActiveOrdersController.handle)
orderRoutes.get('/list-late', ensureAuthenticated, listLateOrdersController.handle)
orderRoutes.get('/list-next-to-expire', ensureAuthenticated, listNextToExpireOrdersController.handle)
orderRoutes.get('/list/:client_id', ensureAuthenticated, listOrdersByClientController.handle)
orderRoutes.get('/list-by-period', ensureAuthenticated, listOrdersByPeriodController.handle)
orderRoutes.get('/list-by-period-and-status', ensureAuthenticated, listOrdersByPeriodAndStatusController.handle)
orderRoutes.get('/:voucher_code', ensureAuthenticated, findOrderByVoucherCodeController.handle)
orderRoutes.delete('/:id', ensureAuthenticated, deleteOrderController.handle)
orderRoutes.put('/:id', ensureAuthenticated, updateOrderController.handle)
orderRoutes.put('/finish/:id', ensureAuthenticated, finishOrderController.handle)