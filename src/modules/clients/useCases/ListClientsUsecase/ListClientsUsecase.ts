import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { IClient } from '../../repositories/interfaces/client'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListClientsUsecase {
    constructor(
        @inject('ClientsRepository')
        private clientsRepositories: ClientsRepository
    ) { }

    async execute(itemsPerPage?: number, page?: number): Promise<IClient[]> {
        const paginatedClients = await this.clientsRepositories.list(itemsPerPage, page)
        const clients = await this.clientsRepositories.list()

        if (page !== 0) {
            return paginatedClients
        }
        
        return clients
    }
}