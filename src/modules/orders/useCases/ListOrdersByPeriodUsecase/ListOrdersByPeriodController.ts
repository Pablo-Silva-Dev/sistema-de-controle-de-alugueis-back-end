import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersByPeriodUsecase } from './ListOrdersByPeriodUsecase'


export class ListOrdersByPeriodController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { period } = req.query
        const parsePeriodInDays = parseInt(period as string)
        const listOrdersByClientUsecase = container.resolve(ListOrdersByPeriodUsecase)
        const orders = await listOrdersByClientUsecase.execute(parsePeriodInDays)
        return res.status(200).json(orders)
    }
}