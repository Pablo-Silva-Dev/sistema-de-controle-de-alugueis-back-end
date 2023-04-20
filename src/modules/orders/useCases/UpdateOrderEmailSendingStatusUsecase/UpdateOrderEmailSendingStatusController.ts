import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateOrderSendingEmailStatusUsecase } from './UpdateOrderEmailSendingStatusUsecase '

export class UpdateOrderSendingEmailStatusController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const updateOrderSendingEmailStatusUsecase = container.resolve(UpdateOrderSendingEmailStatusUsecase)
        await updateOrderSendingEmailStatusUsecase.execute({
            id,
            reminder_order_email_sent: true
        })
        return res.status(200).json({ message: 'Order updated email status updated successfully.' })
    }
}