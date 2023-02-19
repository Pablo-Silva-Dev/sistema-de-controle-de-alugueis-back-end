import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteAdmUsecase } from './DeleteAdmUsecase'

export class DeleteAdmController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteAdmUsecase = container.resolve(DeleteAdmUsecase)
        await deleteAdmUsecase.execute(id)
        return res.status(200).json({ "message": "Administrator deleted successfully." })
    }
}