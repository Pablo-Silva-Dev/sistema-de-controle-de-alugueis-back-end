import dayjs from 'dayjs'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateOrderUsecase } from './CreateOrderUsecase'

export class CreateOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { client_id,
            client_name,
            client_cpf,
            client_cnpj,
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
            total,
            items
        } = req.body

        const finished = false
        const startDate = dayjs(rent_date_start)
        const endDate = dayjs(rent_date_return)
        const total_days = endDate.diff(startDate, 'days')
        const days_to_expire_rent = endDate.diff(new Date(), 'days')

        const createOrderUsecase = container.resolve(CreateOrderUsecase)
        const order = await createOrderUsecase.execute({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
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
            total,
            finished,
            days_to_expire_rent,
            total_days,
            items
        })
        return res.status(201).json(order)
    }
}