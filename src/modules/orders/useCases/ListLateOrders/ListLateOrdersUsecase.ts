import { IOrder } from 'modules/orders/repositories/interfaces/order'
import { injectable, inject } from 'tsyringe'
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'

@injectable()
export class ListLateOrdersUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IOrder[]> {
        const paginatedOrders = await this.ordersRepository
            .listLateOrders(itemsPerPage, page)
        const orders = await this.ordersRepository.listLateOrders()

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }
}