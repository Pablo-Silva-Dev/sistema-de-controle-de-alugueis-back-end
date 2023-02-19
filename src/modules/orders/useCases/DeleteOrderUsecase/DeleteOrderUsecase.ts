import { OrdersRepository } from '../../repositories/implementations/OrdersRepository';
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/appError';

@injectable()
export class DeleteOrderUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: OrdersRepository
    ) { }

    async execute(id: string): Promise<void> {
        const order = await this.ordersRepository.findById(id)
        if(!order) {
            throw new AppError(404, 'Order not found')
        }
        await this.ordersRepository.delete(id)
    }
}