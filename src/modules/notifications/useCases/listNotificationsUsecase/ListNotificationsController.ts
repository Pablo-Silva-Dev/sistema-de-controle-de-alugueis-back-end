import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListNotificationsUsecase } from './ListNotificationsUsecase'

export class ListNotificationsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.query
        const listNotificationsUsecase = container.resolve(ListNotificationsUsecase)

        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedItems = await listNotificationsUsecase.execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedItems)
        }

        const items = await listNotificationsUsecase.execute()
        return res.status(200).json(items)
    }
}