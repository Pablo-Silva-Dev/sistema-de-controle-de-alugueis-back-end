import { Request, Response } from 'express'
import { container } from 'tsyringe'
import {  ListPaginatedOrdersByClient} from './ListOrdersByClientUsecase'

export class ListOrdersByClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { client_id } = req.params
        const { itemsPerPage, page } = req.query
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const listPaginatedOrdersByClient = container.resolve(ListPaginatedOrdersByClient)
        const paginatedOrders = await listPaginatedOrdersByClient.execute(
            client_id,
            parsedItemsPerPage,
            parsedPage
        )

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedOrders)
        }

        return res.status(200).json(paginatedOrders)
    }
}