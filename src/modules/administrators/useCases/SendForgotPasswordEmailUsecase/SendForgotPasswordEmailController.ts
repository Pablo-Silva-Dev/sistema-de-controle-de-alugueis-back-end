import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SendForgotPasswordEmailUsecase } from './SendForgotPasswordEmailUsecase'

export class SendForgotPasswordEmailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body
        const sendForgotPasswordEmailUsecase = container.resolve(SendForgotPasswordEmailUsecase)
        const emailResponse = await sendForgotPasswordEmailUsecase.execute(email)
        return res.status(200).json(emailResponse)
    }
}