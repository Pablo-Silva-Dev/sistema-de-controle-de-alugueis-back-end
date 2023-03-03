import { IOrder } from 'modules/orders/repositories/interfaces/order'
import { injectable, inject } from 'tsyringe'
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'

@injectable()
export class ListFinishedOrdersUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IOrder[]> {
        const paginatedOrders = await this.ordersRepository
            .listFinishedOrders(itemsPerPage, page)
        const orders = await this.ordersRepository.listFinishedOrders()

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }
}