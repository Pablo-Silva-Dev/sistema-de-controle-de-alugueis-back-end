import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAdministratorsUsecase } from './ListAdmsUsecase'

export class ListAdmsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAdministratorsUsecase = container.resolve(ListAdministratorsUsecase)
        const administrators = await listAdministratorsUsecase.execute()
        return res.status(200).json(administrators)
    }
}