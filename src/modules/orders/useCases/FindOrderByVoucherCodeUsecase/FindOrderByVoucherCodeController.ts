import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindOrderByVoucherCodeUsecase } from './FindOrderByVoucherCodeUsecase'

export class FindOrderByVoucherCodeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { voucher_code } = req.params
        const findOrderByVoucherCodeUsecase = container.resolve(FindOrderByVoucherCodeUsecase)
        const order = await findOrderByVoucherCodeUsecase.execute(voucher_code)
        return res.status(200).json(order)
    }
}