import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateItemUsecase } from '../CreateItemUsecase/CreateItemUsecase'

export class CreateItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { description, price, quantity } = req.body
        const createItemUsecase = container.resolve(CreateItemUsecase)
        const item = await createItemUsecase.execute({ description, price, quantity })
        return res.status(201).json(item)
    }
}