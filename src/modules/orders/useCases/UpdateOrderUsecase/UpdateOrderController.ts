import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateOrderUsecase } from './UpdateOrderUsecase'

export class UpdateOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const {
            rent_date_return,
            rent_date_start,
            total
        } = req.body
        const updateOrderUsecase = container.resolve(UpdateOrderUsecase)
        await updateOrderUsecase.execute({
            id,
            rent_date_return,
            rent_date_start,
            total
        })
        return res.status(200).json({ message: 'Order updated successfully.' })
    }
}