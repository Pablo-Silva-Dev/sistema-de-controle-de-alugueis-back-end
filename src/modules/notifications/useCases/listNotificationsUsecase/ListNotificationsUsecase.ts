import { inject, injectable } from 'tsyringe'
import { NotificationsRepository } from '../../repositories/implementations/notifcationsRepository'
import { INotification } from '../../repositories/interfaces/notification'

@injectable()
export class ListNotificationsUsecase {
    constructor(
        @inject('NotificationsRepository')
        private notificationsRepository: NotificationsRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<INotification[]> {
        const paginatedNotifications = await this.notificationsRepository.list(itemsPerPage, page)
        const notifications = await this.notificationsRepository.list()

        if (page !== 0) {
            return paginatedNotifications
        }

        return notifications
    }
}