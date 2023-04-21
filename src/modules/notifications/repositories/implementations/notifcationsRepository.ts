import { getRepository, Repository } from 'typeorm'
import { INotificationsRepository } from '../interfaces/notifications'
import { Notification } from '../../entities/notifications'
import { INotification } from '../interfaces/notification'

export class NotificationsRepository implements INotificationsRepository {

    private repository: Repository<Notification>
    public constructor() {
        this.repository = getRepository(Notification)
    }

    async list(itemsPerPage?: number, page?: number) {
        const notifications = await this.repository.find({
            order:{
                print_number: 'DESC'
            }
        })

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedNotifications = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            order: {
                print_number: 'DESC'
            }
        })

        if (page !== 0) {
            return paginatedNotifications
        }

        return notifications
    }


    async listUnread(itemsPerPage?: number, page?: number) {
        const notifications = await this.repository.find({
            where: {
                read: false,
            },
            order: {
                print_number: 'DESC'
            }
        })

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedNotifications = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                read: false,
            },
            order: {
                print_number: 'DESC'
            }
        })

        if (page !== 0) {
            return paginatedNotifications
        }

        return notifications
    }

    async listByCategory(
        category: string,
        itemsPerPage?: number,
        page?: number
    ) {
        const notifications = await this.repository.find()

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedNotifications = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            order:{
                print_number: 'DESC'
            }
        })

        if (page !== 0) {
            return paginatedNotifications
        }

        return notifications
    }

    async findById(id: string): Promise<INotification> {
        const notification = await this.repository.findOne(id)
        return notification
    }


    async create({ title, content, category }: INotification) {
        const newNotification = this.repository.create({
            title,
            content,
            category,
            read: false
        })

        await this.repository.save(newNotification)
    }

    async update(id: string, read: boolean) {
        await this.repository.update(id, { read })
    }

    async delete(id: string) {
        await this.repository.delete({ id })
    }

}