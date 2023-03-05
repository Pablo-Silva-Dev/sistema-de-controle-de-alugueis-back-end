import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'
import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order'

@injectable()
export class ListOrdersByPeriodAndStatusUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository,
    ) { }

    async execute(
        periodInDays: number,
        status: string,
        itemsPerPage: number,
        page: number
    ): Promise<IOrder[]> {
        const orders = await this.ordersRepository
            .listOrdersByPeriodAndStatus(periodInDays, status, itemsPerPage, page)
        return orders
    }

}