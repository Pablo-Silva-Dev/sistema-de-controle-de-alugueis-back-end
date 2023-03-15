import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/appError';
import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { IFinishOrder } from '../../repositories/interfaces/order';

@injectable()
export class FinishOrderWithJustificationUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute({
        id,
        divergence_justification
    }: IFinishOrder): Promise<void> {

        const order = await this.ordersRepository.findById(id)

        if (!order) {
            throw new AppError(404, 'Order not found')
        }

        await this.ordersRepository.finishOrderWithJustification({ id, divergence_justification })
    }
}