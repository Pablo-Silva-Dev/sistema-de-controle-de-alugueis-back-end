import { inject, injectable } from 'tsyringe'
import { IClientsRepository } from '../../../clients/repositories/interfaces/clients';
import { IUpdateClient } from '../../repositories/interfaces/clients'
import { AppError } from '../../../../errors/appError';


@injectable()
export class UpdateClientUsecase {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) { }

    async execute({
        id,
        cep,
        city,
        neighborhood,
        street,
        residence_number,
        complement,
        reference_point,
        phone }: IUpdateClient): Promise<void> {

        const client = await this.clientsRepository.findById(id)
        if (!client) {
            throw new AppError(404, 'Client not found')
        }

        await this.clientsRepository.update({
            id,
            cep,
            city,
            neighborhood,
            street,
            residence_number,
            complement,
            reference_point,
            phone
        })
    }
}