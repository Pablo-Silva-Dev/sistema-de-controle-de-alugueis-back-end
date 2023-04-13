import {
    getRepository,
    Repository,
    MoreThan,
    LessThan,
    Between
} from 'typeorm'
import dayjs from 'dayjs'
import { Order } from '../../entities/Order'
import { IFinishOrder, IOrder, IUpdateOrder } from '../interfaces/order'
import { IOrdersRepository } from '../interfaces/orders'

export class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>
    public constructor() {
        this.repository = getRepository(Order)
    }
    async updateTime(id: string, days_to_expire_rent: number): Promise<void> {
        await this.repository.update(id, { days_to_expire_rent })
    }

    async update({
        id,
        rent_date_return,
        rent_date_start,
        total,
        last_warning_date
    }: IUpdateOrder): Promise<void> {
        await this.repository.update(
            id,
            {
                rent_date_return,
                rent_date_start,
                total,
                last_warning_date
            })
    }

    async finishOrder({ id }: IFinishOrder): Promise<void> {
        await this.repository.update(id, { finished: true })
    }

    async finishOrderWithJustification({ id, divergence_justification }: IFinishOrder): Promise<void> {
        await this.repository.update(id, {
            finished: true,
            divergence_justification: divergence_justification
        })
    }

    async create({
        client_id,
        client_name,
        client_cpf,
        client_cnpj,
        client_phone,
        client_email,
        client_address_cep,
        client_address_city,
        client_address_complement,
        client_address_neighborhood,
        client_address_reference_point,
        client_address_residence_number,
        client_address_street,
        voucher_code,
        rent_date_start,
        rent_date_return,
        total_days,
        days_to_expire_rent,
        finished,
        total,
        items
    }: IOrder): Promise<IOrder> {
        const newOrder = await this.repository.create({
            client_id,
            client_name,
            client_cpf,
            client_cnpj,
            client_phone,
            client_email,
            client_address_cep,
            client_address_city,
            client_address_complement,
            client_address_neighborhood,
            client_address_reference_point,
            client_address_residence_number,
            client_address_street,
            voucher_code,
            rent_date_start,
            rent_date_return,
            total_days,
            days_to_expire_rent,
            finished,
            total,
            items
        })
        const order = await this.repository.save(newOrder)
        return order
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

    async listFinishedOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                finished: true
            }
        })


        const orders = await this.repository.find({
            where: {
                finished: true
            }
        })

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }

    async listFinishedWithJustificationOrders(
        itemsPerPage?: number,
        page?: number
    ): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            where: {
                divergence_justification: true
            },
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })

        if (page !== 0) {
            return paginatedOrders
        }

        const orders = await this.repository.find({
            where: {
                divergence_justification: true
            }
        })

        return orders
    }


    async listActiveOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                finished: false
            }
        })


        const orders = await this.repository.find({
            where: {
                finished: false
            }
        })

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }

    async listLateOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                days_to_expire_rent: LessThan(0),
                finished: false,
            }
        })


        const orders = await this.repository.find({
            where: {
                days_to_expire_rent: LessThan(0),
                finished: false,
            }
        })

        if (page !== 0) {
            return paginatedOrders
        }

        return orders
    }
    async listNextToExpireOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]> {

        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                days_to_expire_rent: Between(0, 10),
                finished: false,
            }
        })


        const orders = await this.repository.find({
            where: {
                days_to_expire_rent: Between(0, 10),
                finished: false,
            }
        })

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
            relations: ['client'],

        })
        return orders
    }

    async findByVoucherCode(voucher_code: string): Promise<IOrder> {
        const order = await this.repository.findOne({ voucher_code })
        return order
    }

    async listOrdersByPeriod(
        periodInDays: number,
        itemsPerPage: number,
        page: number
    ): Promise<IOrder[]> {
        const today = dayjs().toDate()
        const startPeriodDate = dayjs(today).subtract(periodInDays, 'day').toDate()

        const orders = await this.repository.find({
            where: {
                created_at: MoreThan(new Date(startPeriodDate)),
            },
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })
        return orders
    }

    async listOrdersByPeriodAndStatus(
        periodInDays: number,
        status: string,
        itemsPerPage: number,
        page: number,
    ): Promise<IOrder[]> {
        const today = dayjs().toDate()
        const startPeriodDate = dayjs(today).subtract(periodInDays, 'day').toDate()

        const orders = await this.repository.find({
            where: {
                created_at: MoreThan(startPeriodDate),
            },
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })

        const nextToExpireOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                created_at: MoreThan(startPeriodDate),
                days_to_expire_rent: Between(0, 10),
                finished: false,
            }
        })

        const lateOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                created_at: MoreThan(startPeriodDate),
                days_to_expire_rent: LessThan(0),
                finished: false,
            }
        })


        const finishedOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                created_at: MoreThan(startPeriodDate),
                finished: true
            }
        })


        const activeOrders = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
            where: {
                created_at: MoreThan(startPeriodDate),
                finished: false
            }
        })

        if (status === 'activeOrders') {
            return activeOrders
        }

        if (status === 'finishedOrders') {
            return finishedOrders
        }

        if (status === 'lateOrders') {
            return lateOrders
        }

        if (status === 'nextToExpireOrders') {
            return nextToExpireOrders
        }

        return orders
    }
}