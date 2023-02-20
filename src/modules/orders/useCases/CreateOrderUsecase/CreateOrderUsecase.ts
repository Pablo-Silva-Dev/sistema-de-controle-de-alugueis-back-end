import { inject, injectable } from 'tsyringe'
import { IOrdersRepository } from '../../repositories/interfaces/orders'
import { IOrder } from '../../repositories/interfaces/order'

@injectable()
export class CreateOrderUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) { }

    async execute({
        client_id,
        client_name,
        client_cpf,
        client_cnpj,
        rent_date_start,
        rent_date_return,
        total,
        items
    }: IOrder): Promise<void> {
        await this.ordersRepository.create({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
            rent_date_start,
            rent_date_return,
            total,
            items
        })
    }
}
