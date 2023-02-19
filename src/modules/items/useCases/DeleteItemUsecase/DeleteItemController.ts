import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteItemUsecase } from './DeleteItemUsecase'

export class DeleteItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteItemUsecase = container.resolve(DeleteItemUsecase)
        await deleteItemUsecase.execute(id)
        return res.status(200).json({ "message": "Item deleted successfully." })
    }
}