import { AppError } from '../../../../errors/appError';
import { inject, injectable } from 'tsyringe'
import { ItemsRepository } from '../../repositories/implementations/ItemsRepository'

@injectable()
export class DeleteItemUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository
    ) { }

    async execute(id: string): Promise<void> {
        const item = await this.itemsRepository.findById(id)
        if(!item){
            throw new AppError(404, "Item not found")
        }
        await this.itemsRepository.delete(id)
    }
}