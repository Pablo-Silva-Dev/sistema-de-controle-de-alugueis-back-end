import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateAdmUsecase } from './UpdateAdmUsecase'

export class UpdateAdmController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body
        const updateAdmUsecase = container.resolve(UpdateAdmUsecase)
        await updateAdmUsecase.execute({ email, password })
        return res.status(201).json({ "message": "Password updated with success." })
    }
}

