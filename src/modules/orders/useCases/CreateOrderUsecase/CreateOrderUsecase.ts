import { inject, injectable } from 'tsyringe'
import { IOrdersRepository } from '../../repositories/interfaces/orders'
import { IOrder } from '../../repositories/interfaces/order'
import { DateProvider } from '../../../../shared/providers/DateProvider/implementations/DateProvider'
@injectable()
export class CreateOrderUsecase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository,
        @inject('DateProvider')
        private dateProvider : DateProvider
    ) { }

    
    async execute({
        client_id,
        client_cnpj,
        client_cpf,
        client_name,
        client_phone,
        client_email,
        client_address_cep,
        client_address_city,
        client_address_complement,
        client_address_neighborhood,
        client_address_reference_point,
        client_address_residence_number,
        client_address_street,
        rent_date_start,
        rent_date_return,
        total_days = this.dateProvider.dateDifference(rent_date_start, rent_date_return),
        days_to_expire_rent = this.dateProvider.daysToExpireRent(rent_date_return),
        finished = false,
        total,
        items
    }: IOrder): Promise<IOrder> {
      const order =  await this.ordersRepository.create({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
            client_email,
            client_phone,
            client_address_cep,
            client_address_city,
            client_address_complement,
            client_address_neighborhood,
            client_address_reference_point,
            client_address_residence_number,
            client_address_street,
            rent_date_start,
            rent_date_return,
            total_days,
            days_to_expire_rent,
            finished,
            total,
            items
        })

        return order
    }
}
