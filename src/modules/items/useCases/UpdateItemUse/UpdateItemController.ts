import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateItemUsecase } from './UpdateItemUsecase'

export class UpdateItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            description,
            price,
            quantity
        } = req.body
        const { id } = req.params

        const updateItemUsecase = container.resolve(UpdateItemUsecase)

        await updateItemUsecase.execute({
            id,
            description,
            price,
            quantity
        })
        return res.status(201).json({ "message": "Item updated with success." })
    }
}

