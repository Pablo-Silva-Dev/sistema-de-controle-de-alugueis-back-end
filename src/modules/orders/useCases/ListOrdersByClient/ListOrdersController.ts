import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersByClietntUsecase } from './ListOrdersByClientUsecase'

export class ListOrdersByClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {client_id} = req.params
        const listOrdersByClientUsecase = container.resolve(ListOrdersByClietntUsecase)
        const orders = await listOrdersByClientUsecase.execute(client_id)
        return res.status(200).json(orders)
    }
}