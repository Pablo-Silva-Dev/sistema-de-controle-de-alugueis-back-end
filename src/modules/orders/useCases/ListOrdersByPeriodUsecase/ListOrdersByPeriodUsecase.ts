import { OrdersRepository } from '../../repositories/implementations/OrdersRepository'
import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order'

@injectable()
export class ListOrdersByPeriodUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository,
    ) { }

    async execute(
        periodInDays: number,
        itemsPerPage: number,
        page: number
): Promise<IOrder[]> {
        const orders = await this.ordersRepository.listOrdersByPeriod(periodInDays, itemsPerPage, page)
        return orders
    }

}