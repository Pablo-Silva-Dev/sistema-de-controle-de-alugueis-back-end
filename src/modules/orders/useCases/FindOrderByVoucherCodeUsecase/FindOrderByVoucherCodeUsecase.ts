import { AppError } from './../../../../errors/appError';
import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order';
import { IOrdersRepository } from '../../repositories/interfaces/orders';

@injectable()
export class FindOrderByVoucherCodeUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) { }

    async execute(voucher_code: string): Promise<IOrder> {
        const order = await this.ordersRepository.findByVoucherCode(voucher_code)
        if (!order) {
            throw new AppError(404, 'Order not found.')
        }
        return order
    }
}