import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListLateOrdersUseCase } from './ListLateOrdersUsecase'

export class ListLateOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.params
        const listLateOrdersUseCase = container.resolve(ListLateOrdersUseCase)
        const orders = await listLateOrdersUseCase.execute()
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedOrders = await listLateOrdersUseCase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}