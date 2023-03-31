import { container } from 'tsyringe'
import { UpdateOrderTime } from './UpdateOrderTimeUsecase'
import { Request, Response } from 'express'

export class UpdateOrderTimeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateOrderTime = container.resolve(UpdateOrderTime)
        await updateOrderTime.execute()
            .then(() => {
                console.log('Orders updated successfully!')
            })
        return res.status(200).json({ message: 'Orders updated successfully' })
    }
}