import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/appError';
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { IUpdateOrder } from './../../repositories/interfaces/order';

@injectable()
export class UpdateOrderUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute({
        id,
        rent_date_return,
        rent_date_start,
        total,
        last_warning_date
    }: IUpdateOrder): Promise<void> {

        const order = await this.ordersRepository.findById(id)

        if(!order) {
            throw new AppError(404, 'Order not found')
        }

        await this.ordersRepository.update({
            id,
            rent_date_return,
            rent_date_start,
            total,
            last_warning_date
        })
    }
}