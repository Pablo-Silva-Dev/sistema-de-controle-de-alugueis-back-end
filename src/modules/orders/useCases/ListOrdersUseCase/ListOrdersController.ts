import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListOrdersUsecase } from './ListOrdersUsecase'

export class ListOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.query
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const listOrdersUsecase = container.resolve(ListOrdersUsecase)
        const orders = await listOrdersUsecase.execute()
        const paginatedOrders = await listOrdersUsecase.execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}