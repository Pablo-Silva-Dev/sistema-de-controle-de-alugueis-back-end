import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/appError';
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { IUpdateOrderSendingEmailStatus } from '../../repositories/interfaces/order';

@injectable()
export class UpdateOrderSendingEmailStatusUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute({
        id,
        reminder_order_email_sent,
    }: IUpdateOrderSendingEmailStatus): Promise<void> {

        const order = await this.ordersRepository.findById(id)

        if(!order) {
            throw new AppError(404, 'Order not found')
        }

        await this.ordersRepository.updateOrderSendingEmailStatus({
            id,
            reminder_order_email_sent,
        })
    }
}