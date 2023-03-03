import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListNextToExpireOrdersUseCase } from './ListLateOrdersUsecase'

export class ListNextToExpireOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.params
        const listNextToExpireOrdersUseCase = container.resolve(ListNextToExpireOrdersUseCase)
        const orders = await listNextToExpireOrdersUseCase.execute()
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedOrders = await listNextToExpireOrdersUseCase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}