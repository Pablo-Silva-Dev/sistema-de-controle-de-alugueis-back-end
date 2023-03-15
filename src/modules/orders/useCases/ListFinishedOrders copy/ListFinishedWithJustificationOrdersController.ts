import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListFinishedWithJustificationOrdersUseCase } from './ListFinishedWithJustificationOrdersUsecase'

export class ListFinishedWithJustificationOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.params
        const listFinishedWithJustificationOrdersUseCase = container
            .resolve(ListFinishedWithJustificationOrdersUseCase)
        const orders = await listFinishedWithJustificationOrdersUseCase.execute()
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedOrders = await listFinishedWithJustificationOrdersUseCase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}