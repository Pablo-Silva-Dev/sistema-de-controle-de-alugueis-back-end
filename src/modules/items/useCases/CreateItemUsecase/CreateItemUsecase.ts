import { inject, injectable } from 'tsyringe'
import { ItemsRepository } from '../../repositories/implementations/ItemsRepository'
import { IItem } from '../../repositories/interfaces/item'

@injectable()
export class CreateItemUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository
    ) { }

    async execute({ description, description_long, price, stock }: IItem): Promise<void> {
        await this.itemsRepository.create({
            description, description_long, price, stock
        })
    }
}