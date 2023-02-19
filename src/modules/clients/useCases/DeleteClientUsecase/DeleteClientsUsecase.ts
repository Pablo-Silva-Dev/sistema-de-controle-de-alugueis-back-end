import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/appError';

@injectable()
export class DeleteClientUsecase {
    constructor(
        @inject('ClientsRepository')
        private clientsRepositories: ClientsRepository
    ) { }

    async execute(id: string): Promise<void> {
        const client = await this.clientsRepositories.findById(id)
        if(!client) {
            throw new AppError(404, 'Client not found')
        }
        await this.clientsRepositories.delete(id)
    }
}