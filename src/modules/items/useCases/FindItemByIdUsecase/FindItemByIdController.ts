import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { FindItemByIdUsecase } from './FindItemByIdUsecase'

export class FindItemByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const findItemByIdUsecase = container.resolve(FindItemByIdUsecase)
        const item = await findItemByIdUsecase.execute(id)
        return res.status(200).json(item)
    }
}