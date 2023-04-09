import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateNotificationUsecase } from './updateNotificationUsecase'

export class UpdateNotificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { read } = req.body
        const updateNotificationUsecase = container.resolve(UpdateNotificationUsecase)
        await updateNotificationUsecase.execute(id, read)
        return res.status(200).json({ message: 'Notification updated with success!' })
    }
}