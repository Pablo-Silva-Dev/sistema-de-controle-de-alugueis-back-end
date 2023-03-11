import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FinishOrderUsecase } from './FinishOrderUsecase'

export class FinishOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const finishOrderUsecase = container.resolve(FinishOrderUsecase)
        await finishOrderUsecase.execute({ id })
        return res.status(200).json({ message: 'Order finished successfully.' })
    }
}