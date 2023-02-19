import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { AuthenticateAdmUsecase } from './AuthenticateAdmUsecase'

export class AuthenticateAdmController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body
        const authenticateAdmUsecase = container.resolve(AuthenticateAdmUsecase)
        const authenticationResponse = await authenticateAdmUsecase.execute({ email, password })
        return res.status(200).json(authenticationResponse)
    }
}