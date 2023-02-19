import { ItemsRepository } from '../../repositories/implementations/ItemsRepository';
import { IItem } from '../../repositories/interfaces/item'
import { injectable, inject } from 'tsyringe'

@injectable()
export class ListItemsUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IItem[]> {
        const paginatedItems = await this.itemsRepository.list(itemsPerPage, page)
        const items = await this.itemsRepository.list()

        if (page !== 0) {
            return paginatedItems
        }

        return items
    }
}