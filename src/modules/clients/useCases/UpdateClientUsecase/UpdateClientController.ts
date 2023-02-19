import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateClientUsecase } from './UpdateClientUsecase'

export class UpdateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            cep,
            city,
            neighborhood,
            street,
            residence_number,
            complement,
            reference_point,
            phone } = req.body
        const { id } = req.params

        const updateClientUsecase = container.resolve(UpdateClientUsecase)

        await updateClientUsecase.execute({
            id,
            cep,
            city,
            neighborhood,
            street,
            residence_number,
            complement,
            reference_point,
            phone
        })
        return res.status(201).json({ "message": "Client updated with success." })
    }
}

