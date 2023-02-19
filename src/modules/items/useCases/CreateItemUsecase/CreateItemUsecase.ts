import { inject, injectable } from 'tsyringe'
import { ItemsRepository } from '../../repositories/implementations/ItemsRepository'
import { IItem } from '../../repositories/interfaces/item'

@injectable()
export class CreateItemUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository
    ) { }

    async execute({ description, price, quantity }: IItem): Promise<void> {
        await this.itemsRepository.create({
            description, price, quantity
        })
    }
}