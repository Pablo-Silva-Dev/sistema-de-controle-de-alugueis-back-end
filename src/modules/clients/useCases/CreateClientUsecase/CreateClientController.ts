import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateClientUsecase } from './CreateClientUsecase'

export class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            cep,
            city,
            complement,
            cpf,
            cnpj,
            email,
            name,
            neighborhood,
            phone,
            residence_number,
            street,
            reference_point
        } = req.body

        const createClientUsecase = container.resolve(CreateClientUsecase)
        await createClientUsecase.execute({
            cep,
            city,
            complement,
            cpf,
            cnpj,
            email,
            name,
            neighborhood,
            phone,
            residence_number,
            street,
            reference_point
        })

        return res.status(201).json({ "massage": "Client registered." })
    }
}