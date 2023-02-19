import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order';
import { IOrdersRepository } from '../../repositories/interfaces/orders';

@injectable()
export class ListOrdersUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IOrder[]> {
        const paginatedOrders = await this.ordersRepository.list(itemsPerPage, page)
        const orders = await this.ordersRepository.list()

        if (page !== 0) {
            return paginatedOrders
        }
        
        return orders
    }
}