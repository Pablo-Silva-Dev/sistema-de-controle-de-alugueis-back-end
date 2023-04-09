import { inject, injectable } from 'tsyringe'
import { NotificationsRepository } from '../../repositories/implementations/notifcationsRepository'
import { INotification } from '../../repositories/interfaces/notification'

@injectable()
export class ListUnreadNotificationsUsecase {
    constructor(
        @inject('NotificationsRepository')
        private notificationsRepository: NotificationsRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<INotification[]> {
        const paginatedNotifications = (await this.notificationsRepository.listUnread(itemsPerPage, page)).reverse()

        const notifications = (await this.notificationsRepository.listUnread()).reverse()

        if (page !== 0) {
            return paginatedNotifications
        }

        return notifications
    }
}