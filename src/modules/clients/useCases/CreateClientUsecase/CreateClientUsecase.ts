import { inject, injectable } from 'tsyringe'
import { IClientsRepository } from '../../repositories/interfaces/clients'
import { IClient } from '../../repositories/interfaces/client'
import { AppError } from '../../../../errors/appError'
import { cpf as CPF, cnpj as CNPJ } from 'cpf-cnpj-validator'

@injectable()
export class CreateClientUsecase {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) { }
    async execute({
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

        const clientAlreadyRegistered = await this.clientsRepository.findByEmail(email)

        if (clientAlreadyRegistered) {
            throw new AppError(403, 'Client already registered')
        }

        const validCPF = CPF.isValid(cpf)
        const validCNPJ = CNPJ.isValid(cnpj)

        if (cpf && !validCPF) {
            throw new AppError(403, 'CPF is invalid.')
        }

        if (cnpj && !validCNPJ) {
            throw new AppError(403, 'CNPJ is invalid.')
        }
        
        if(!cnpj && !cpf){
            throw new AppError(403, 'CPF or CNPJ is required.')
        }

        await this.clientsRepository.create({
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
    }
}
