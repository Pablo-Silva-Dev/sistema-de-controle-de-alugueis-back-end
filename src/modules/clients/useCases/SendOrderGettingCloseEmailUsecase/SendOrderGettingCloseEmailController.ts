import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SendOrderGettingCloseEmailUsecase } from './SendOrderGettingCloseEmailUsecase'

export class SendOrderGettingCloseEmailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body
        const sendOrderGettingCloseEmailUsecase = container
            .resolve(SendOrderGettingCloseEmailUsecase)
        const emailResponse = await sendOrderGettingCloseEmailUsecase.execute(email)
        return res.status(200).json(emailResponse)
    }
}