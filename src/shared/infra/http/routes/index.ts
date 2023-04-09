import { Router } from 'express'
import { administratorsRoutes } from './administrators.routes'
import { clientRoutes } from './clients.routes'
import { itemsRoutes } from './items.routes'
import { orderRoutes } from './orders.routes'
import { notificationsRoutes } from './notifications.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/items', itemsRoutes)
routes.use('/administrators', administratorsRoutes)
routes.use('/orders', orderRoutes)
routes.use('/notifications', notificationsRoutes)

export { routes }