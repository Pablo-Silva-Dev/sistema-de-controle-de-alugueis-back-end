import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteClientUsecase } from './DeleteClientsUsecase'

export class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteClientsUsecase = container.resolve(DeleteClientUsecase)
        await deleteClientsUsecase.execute(id)
        return res.status(200).json({message: 'Client deleted with success'})
    }
}