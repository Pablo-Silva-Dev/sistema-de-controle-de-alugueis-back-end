import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { ListItemsUsecase } from './ListItemsUsecase'

export class ListItemsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.query
        const listItemsUsecase = container.resolve(ListItemsUsecase)

        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedItems = await listItemsUsecase.execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedItems)
        }

        const items = await listItemsUsecase.execute()
        return res.status(200).json(items)
    }
}