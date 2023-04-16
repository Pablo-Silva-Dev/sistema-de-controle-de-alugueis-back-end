import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersByPeriodAndStatusUsecase } from './ListOrdersByPeriodAndStatusUsecase'


export class ListOrdersByPeriodAndStatusController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { period, status, itemsPerPage, page } = req.query
        const parsePeriodInDays = parseInt(period as string)
        const listOrdersByPeriodAndStatusUsecase = container.resolve(ListOrdersByPeriodAndStatusUsecase)
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const orders = await listOrdersByPeriodAndStatusUsecase
        .execute(parsePeriodInDays, status as string, parsedItemsPerPage, parsedPage)
        return res.status(200).json(orders)
    }
}