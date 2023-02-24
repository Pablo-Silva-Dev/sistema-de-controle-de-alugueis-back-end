import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersByPeriodUsecase } from './ListOrdersByPeriodUsecase'


export class ListOrdersByPeriodController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { period, itemsPerPage, page } = req.query
        const parsePeriodInDays = parseInt(period as string)
        const listOrdersByClientUsecase = container.resolve(ListOrdersByPeriodUsecase)
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const orders = await listOrdersByClientUsecase.execute(parsePeriodInDays, parsedItemsPerPage, parsedPage)
        return res.status(200).json(orders)
    }
}