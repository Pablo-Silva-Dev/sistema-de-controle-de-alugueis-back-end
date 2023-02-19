import { AppError } from '../../../../errors/appError';
import { inject, injectable } from 'tsyringe'
import { IOrder } from '../../repositories/interfaces/order';
import { IOrdersRepository } from '../../repositories/interfaces/orders';
import { IClientsRepository } from '../../../clients/repositories/interfaces/clients'

@injectable()
export class ListOrdersByClietntUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository,
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) { }

    async execute(client_id: string): Promise<IOrder[]> {
        const client = await this.clientsRepository.findById(client_id)
        if (!client) {
            throw new AppError(404, 'Client not found.')
        }
        const orders = await this.ordersRepository.listOrdersByClient(client_id)
        return orders
    }
}