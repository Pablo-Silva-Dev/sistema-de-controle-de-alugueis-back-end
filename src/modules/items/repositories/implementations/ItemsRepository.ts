import { IItemsRepository, IUpdateItem, IUpdateItemStatus } from '../interfaces/items'
import { getRepository, Repository } from 'typeorm'
import { IItem } from '../interfaces/item'
import { Item } from '../../entities/items'

export class ItemsRepository implements IItemsRepository {
    private repository: Repository<Item>
    public constructor() {
        this.repository = getRepository(Item)
    }

    async create({
        description,
        description_long,
        price,
        stock,
        image,
        last_warning_date
    }: IItem): Promise<void> {

        const imageFullUrl = `${process.env.IMAGE_FULL_URL}/${image}`

        const item = await this.repository.create({
            description,
            description_long,
            price,
            stock,
            image: imageFullUrl,
            last_warning_date
        })

        await this.repository.save(item)
    }
    async list(itemsPerPage?: number, page?: number): Promise<IItem[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedItems = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })
        const items = await this.repository.find()

        if (page !== 0) {
            return paginatedItems
        }

        return items
    }
    async findById(id: string): Promise<IItem> {
        const item = await this.repository.findOne({ id })
        return item
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
    async update({
        id,
        description,
        description_long,
        price,
        quantity,
        last_warning_date
    }: IUpdateItem): Promise<void> {
        await this.repository.update(id, {
            description,
            description_long,
            price,
            quantity,
            last_warning_date
        })
    }

    async updateItemStock({ id, stock }: IUpdateItemStatus): Promise<void> {
        await this.repository.update(id, { stock })
    }
}