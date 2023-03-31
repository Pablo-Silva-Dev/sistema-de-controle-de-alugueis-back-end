import { inject, injectable } from 'tsyringe'
import { daysToExpireRent } from '../../../shared/utils/dateCalcs'
import { IOrdersRepository } from '../repositories/interfaces/orders'

@injectable()
export class UpdateOrderTime {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository,
    ) { }

    async execute() {
        const orders = await this.ordersRepository.list()
        const updatedOrders = orders.map(async (order) => ({
            ...order,
            days_to_expire_rent: await this.ordersRepository
                .updateTime(order.id, daysToExpireRent(order.rent_date_return))
        }))
        return updatedOrders
    }
}