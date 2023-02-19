import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListClientsUsecase } from './ListClientsUsecase'

export class ListClientsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.query
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const listClientsUsecase = container.resolve(ListClientsUsecase)
        const clients = await listClientsUsecase.execute()
        const paginatedClients = await listClientsUsecase
            .execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedClients)
        }
        
        return res.status(200).json(clients)
    }
}