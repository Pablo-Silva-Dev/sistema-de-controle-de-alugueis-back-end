import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteNotificationUsecase } from './deleteNotificationUsecase'

export class DeleteNotificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteNotificationUsecase = container.resolve(DeleteNotificationUsecase)
        await deleteNotificationUsecase.execute(id)
        return res.status(200).json({ message: 'Notification deleted with success!' })
    }
}