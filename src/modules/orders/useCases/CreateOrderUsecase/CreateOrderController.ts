import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateOrderUsecase } from './CreateOrderUsecase'

export class CreateOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { client_id,
            client_name,
            client_cpf,
            client_cnpj,
            rent_date_start,
            rent_date_return,
            total,
            items
        } = req.body
        const createOrderUsecase = container.resolve(CreateOrderUsecase)
        await createOrderUsecase.execute({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
            rent_date_start,
            rent_date_return,
            total,
            items
        })
        return res.status(201).json({ "message": "Order created with success" })
    }
}