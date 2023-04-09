import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/appError';
import { NotificationsRepository } from '../../repositories/implementations/notifcationsRepository'

@injectable()
export class UpdateNotificationUsecase {
    constructor(
        @inject('NotificationsRepository')
        private notificationsRepository: NotificationsRepository
    ) { }

    async execute(id: string, read: boolean): Promise<void> {
        const notification = await this.notificationsRepository.findById(id)
        if (!notification) {
            throw new AppError(404, "Item not found")
        }

        await this.notificationsRepository.update(id, read)
    }
}