import { Router } from 'express'
import { administratorsRoutes } from './administrators.routes'
import { clientRoutes } from './clients.routes'
import { itemsRoutes } from './items.routes'
import { orderRoutes } from './orders.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/items', itemsRoutes)
routes.use('/administrators', administratorsRoutes)
routes.use('/orders', orderRoutes)

export { routes }