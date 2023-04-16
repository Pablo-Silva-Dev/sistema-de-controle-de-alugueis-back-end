import { AppError } from '../../../../errors/appError';
import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order';
import { IOrdersRepository } from '../../repositories/interfaces/orders';
import { IClientsRepository } from '../../../clients/repositories/interfaces/clients'

@injectable()
export class ListPaginatedOrdersByClient {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository,
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) { }

    async execute(client_id: string, itemsPerPage?: number, page?: number): Promise<IOrder[]> {
        const client = await this.clientsRepository.findById(client_id)
        if (!client) {
            throw new AppError(404, 'Client not found.')
        }
        const paginatedOrders = await this.ordersRepository
            .listPaginatedOrdersByClient(client_id, itemsPerPage, page)
        const orders = await this.ordersRepository.listPaginatedOrdersByClient(
            client_id,
            itemsPerPage,
            page
        )

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }
}