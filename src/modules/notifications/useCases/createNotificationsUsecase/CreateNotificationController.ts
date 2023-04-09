import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateNotificationUsecase } from './CreateNotificationUsecase'

export class CreateNotificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { title, content, category } = req.body
        const createNotificationUsecase = container.resolve(CreateNotificationUsecase)
        const item = await createNotificationUsecase.execute({
            title,
            content,
            category,
            read: false
        })
        return res.status(201).json(item)
    }
}