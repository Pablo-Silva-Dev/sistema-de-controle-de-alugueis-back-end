import { Repository, getRepository } from 'typeorm'
import { Client } from '../../entities/clients'
import { IClientsRepository, IUpdateClient } from '../interfaces/clients'
import { IClient } from '../interfaces/client'

export class ClientsRepository implements IClientsRepository {
    private repository: Repository<Client>
    public constructor() {
        this.repository = getRepository(Client)
    }
    async update({
        id,
        cep,
        city,
        neighborhood,
        street,
        residence_number,
        complement,
        phone,
        reference_point
    }: IUpdateClient): Promise<void> {
        await this.repository.update(id, {
            cep,
            city,
            neighborhood,
            street,
            residence_number,
            complement,
            phone,
            reference_point
        })
    }
    async create({
        cep,
        city,
        complement,
        cpf,
        cnpj,
        email,
        name,
        neighborhood,
        phone,
        residence_number,
        street,
        reference_point
    }: IClient): Promise<void> {
        const newClient = await this.repository.create({
            cep,
            city,
            complement,
            cpf,
            cnpj,
            email,
            name,
            neighborhood,
            phone,
            residence_number,
            street,
            reference_point
        })

        await this.repository.save(newClient)
    }
    async list(itemsPerPage?: number, page?: number): Promise<Client[]> {


        if (!itemsPerPage) {
            itemsPerPage = 0
        }

        if (!page) {
            page = 0
        }

        const paginatedClients = await this.repository.find({
            take: itemsPerPage,
            skip: (page - 1) * itemsPerPage
        })

        const clients = await this.repository.find()


        if (page !== 0) {
            return paginatedClients
        }

        return clients
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async findByEmail(email: string): Promise<Client> {
        const client = await this.repository.findOne({ email })
        return client
    }
    async findById(id: string): Promise<Client> {
        const client = await this.repository.findOne({ id })
        return client
    }
}