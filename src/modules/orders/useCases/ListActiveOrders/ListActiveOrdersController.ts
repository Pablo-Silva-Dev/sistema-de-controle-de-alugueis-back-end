import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListActiveOrdersUseCase } from './ListActiveOrdersUsecase'

export class ListActiveOrdersController {


    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.params
        const listActiveOrdersUseCase = container.resolve(ListActiveOrdersUseCase)
        const orders = await listActiveOrdersUseCase.execute()
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedOrders = await listActiveOrdersUseCase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(orders)
    }
}