import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListFinishedOrdersUseCase } from './ListFinishedOrdersUsecase'

export class ListFinishedOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.params
        const listFinishedOrdersUseCase = container.resolve(ListFinishedOrdersUseCase)
        const orders = await listFinishedOrdersUseCase.execute()
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedOrders = await listFinishedOrdersUseCase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}