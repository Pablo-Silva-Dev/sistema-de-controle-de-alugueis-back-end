import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateNotificationController } from '../../../../modules/notifications/useCases/createNotificationsUsecase/CreateNotificationController'
import { ListNotificationsController } from '../../../../modules/notifications/useCases/listNotificationsUsecase/ListNotificationsController'
import { DeleteNotificationController } from '../../../../modules/notifications/useCases/deleteNotificationUsecase/deleteNotificationController'
import { UpdateNotificationController } from '../../../../modules/notifications/useCases/updateNotificationUsecase/updateNotificationController'
import { ListUnreadNotificationsController } from '../../../../modules/notifications/useCases/listUnreadNotificationsUsecase/ListUnreadNotificationsController'


export const notificationsRoutes = Router()

const createNotificationController = new CreateNotificationController()
const listNotificationsController = new ListNotificationsController()
const deleteNotificationController = new DeleteNotificationController()
const updateNotificationController = new UpdateNotificationController()
const listUnreadNotificationsController = new ListUnreadNotificationsController()

notificationsRoutes.post('/create', ensureAuthenticated, createNotificationController.handle)
notificationsRoutes.get('/list', ensureAuthenticated, listNotificationsController.handle)
notificationsRoutes.get(
    '/list-unread',
    ensureAuthenticated,
    listUnreadNotificationsController.handle
)
notificationsRoutes.delete('/delete/:id', ensureAuthenticated, deleteNotificationController.handle)
notificationsRoutes.put('/update/:id', ensureAuthenticated, updateNotificationController.handle)