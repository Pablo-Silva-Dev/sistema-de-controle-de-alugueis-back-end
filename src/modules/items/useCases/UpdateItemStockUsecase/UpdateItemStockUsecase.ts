import { AppError } from '../../../../errors/appError';
import { IItemsRepository, IUpdateItemStatus } from '../../repositories/interfaces/items';
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateItemStockUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository
    ) { }

    async execute({ id, stock }: IUpdateItemStatus): Promise<void> {

        const item = await this.itemsRepository.findById(id)

        if (!item) {
            throw new AppError(404, 'Item not found')
        }

        await this.itemsRepository.updateItemStock({ id, stock })
    }

}