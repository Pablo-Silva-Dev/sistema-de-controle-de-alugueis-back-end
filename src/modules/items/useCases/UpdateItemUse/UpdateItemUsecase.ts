import { AppError } from '../../../../errors/appError';
import { IItemsRepository, IUpdateItem } from '../../repositories/interfaces/items';
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateItemUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository
    ) { }

    async execute({ id, description, price, quantity }: IUpdateItem): Promise<void> {

        const item = await this.itemsRepository.findById(id)

        if (!item) {
            throw new AppError(404, 'Item not found')
        }

        await this.itemsRepository.update({ id, description, price, quantity })
    }

}