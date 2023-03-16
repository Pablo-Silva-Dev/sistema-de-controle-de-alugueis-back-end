import { AppError } from './../../../../errors/appError';
import { ItemsRepository } from '../../repositories/implementations/ItemsRepository';
import { IItem } from '../../repositories/interfaces/item'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindItemByIdUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository
    ) { }

    async execute(id: string): Promise<IItem> {
        const item = await this.itemsRepository.findById(id)

        if (!item) {
            throw new AppError(404, 'Item not found')
        }

        return item
    }
}