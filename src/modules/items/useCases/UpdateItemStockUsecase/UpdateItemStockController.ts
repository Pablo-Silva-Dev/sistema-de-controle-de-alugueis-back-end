import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateItemStockUsecase } from './UpdateItemStockUsecase'

export class UpdateItemStockController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            stock
        } = req.body
        const { id } = req.params

        const updateItemStockUsecase = container.resolve(UpdateItemStockUsecase)

        await updateItemStockUsecase.execute({
            id,
            stock
        })
        return res.status(201).json({ "message": "Item stock updated with success." })
    }
}

