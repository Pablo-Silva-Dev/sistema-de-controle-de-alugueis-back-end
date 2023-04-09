import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUnreadNotificationsUsecase } from './ListUnreadNotificationsUsecase'

export class ListUnreadNotificationsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { itemsPerPage, page } = req.query
        const listUnreadNotificationsUsecase = container.resolve(ListUnreadNotificationsUsecase)

        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const paginatedItems = await listUnreadNotificationsUsecase.execute(parsedItemsPerPage, parsedPage)

        if (parsedPage !== 0) {
            return res.status(200).json(paginatedItems)
        }

        const items = await listUnreadNotificationsUsecase.execute()
        return res.status(200).json(items)
    }
}