import { getRepository, Repository, MoreThan } from 'typeorm'
import dayjs from 'dayjs'
import { Order } from '../../entities/Order'
import { IOrder, IUpdateOrder } from '../interfaces/order'
import { IOrdersRepository } from '../interfaces/orders'

export class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>
    public constructor() {
        this.repository = getRepository(Order)
    }
    async update({
        id,
        rent_date_return,
        rent_date_start,
        total
    }: IUpdateOrder): Promise<void> {
        await this.repository.update(id, { rent_date_return, rent_date_start, total })
    }
    async create({
        client_id,
        client_name,
        client_cpf,
        client_cnpj,
        rent_date_start,
        rent_date_return,
        voucher_code,
        total,
        items
    }: IOrder): Promise<void> {
        const newOrder = await this.repository.create({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
            rent_date_start,
            rent_date_return,
            voucher_code,
            total,
            items
        })
        await this.repository.save(newOrder)

    }

    async list(itemsPerPage?: number, page?: number): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })

        const orders = await this.repository.find()

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }

    async findById(id: string): Promise<IOrder> {
        const order = await this.repository.findOne({ id })
        return order
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async listOrdersByClient(client_id: string): Promise<IOrder[]> {
        const orders = await this.repository.find({
            where: { client_id },
            relations: ['client']
        })
        return orders
    }

    async findByVoucherCode(voucher_code: string): Promise<IOrder> {
        const order = await this.repository.findOne({ voucher_code })
        return order
    }

    async listOrdersByPeriod(periodInDays: number): Promise<IOrder[]> {
        const today = dayjs().toDate()
        const startPeriodDate = dayjs(today).subtract(periodInDays, 'day').toDate()

        const orders = await this.repository.find({
            where: {
                created_at: MoreThan(new Date(startPeriodDate))
            }
        })
        return orders
    }
}