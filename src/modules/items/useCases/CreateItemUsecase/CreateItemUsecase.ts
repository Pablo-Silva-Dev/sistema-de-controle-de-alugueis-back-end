import { S3StorageProvider } from '../../../../shared/providers/StorageProvider/implementations/S3Storage'
import { inject, injectable } from 'tsyringe'
import { ItemsRepository } from '../../repositories/implementations/ItemsRepository'
import { IItem } from '../../repositories/interfaces/item'

@injectable()
export class CreateItemUsecase {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: ItemsRepository,
        @inject('S3StorageProvider')
        private s3StorageProvider: S3StorageProvider
    ) { }

    async execute({ id, description, description_long, price, stock, image }: IItem): Promise<void> {

        const item = await this.itemsRepository.findById(id)

        await this.itemsRepository.create({
            description, description_long, price, stock, image
        })

        await this.s3StorageProvider.save(image, 'images')

        // if(item.image){
        //     await this.s3StorageProvider.delete(image, 'images')
        // }
    }
}