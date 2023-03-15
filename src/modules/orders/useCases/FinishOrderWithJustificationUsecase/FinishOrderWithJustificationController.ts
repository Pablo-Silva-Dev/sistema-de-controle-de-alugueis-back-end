import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FinishOrderWithJustificationUsecase } from './FinishOrderWithJustificationUsecase'

export class FinishOrderWithJustificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { divergence_justification } = req.body
        const finishOrderWithJustificationUsecase = container.resolve(FinishOrderWithJustificationUsecase)
        await finishOrderWithJustificationUsecase.execute({ id, divergence_justification })
        return res.status(200).json({ message: 'Order finished successfully.' })
    }
}