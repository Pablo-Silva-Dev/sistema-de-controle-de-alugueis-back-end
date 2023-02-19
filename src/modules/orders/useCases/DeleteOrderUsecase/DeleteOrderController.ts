import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteOrderUsecase } from './DeleteOrderUsecase'

export class DeleteOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteOrderUsecase = container.resolve(DeleteOrderUsecase)
        await deleteOrderUsecase.execute(id)
        return res.status(200).json({message: 'Order deleted with success'})
    }
}