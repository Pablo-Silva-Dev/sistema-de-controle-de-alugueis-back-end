import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CrateAdministratorUsecase } from './CreateAdmUsecase'

export class CreateAdmController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body
        const createAdmUsecase = container.resolve(CrateAdministratorUsecase)
        await createAdmUsecase.execute({ name, email, password })
        return res.status(201).json({ "message": "Administrator created with success" })
    }
}