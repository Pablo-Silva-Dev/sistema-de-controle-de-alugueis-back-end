import { inject, injectable } from 'tsyringe'
import { NotificationsRepository } from '../../repositories/implementations/notifcationsRepository'
import { INotification } from '../../repositories/interfaces/notification'

@injectable()
export class CreateNotificationUsecase {
    constructor(
        @inject('NotificationsRepository')
        private notificationsRepository: NotificationsRepository
    ) { }

    async execute({
        title,
        content,
        category,
    }: INotification): Promise<void> {
        await this.notificationsRepository.create({
            title,
            content,
            category,
            read: false
        })
    }
}