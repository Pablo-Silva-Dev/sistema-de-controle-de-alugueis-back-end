import { IOrder } from 'modules/orders/repositories/interfaces/order'
import { injectable, inject } from 'tsyringe'
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'

@injectable()
export class ListNextToExpireOrdersUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IOrder[]> {
        const paginatedOrders = await this.ordersRepository
            .listNextToExpireOrders(itemsPerPage, page)
        const orders = await this.ordersRepository.listNextToExpireOrders()

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }
}