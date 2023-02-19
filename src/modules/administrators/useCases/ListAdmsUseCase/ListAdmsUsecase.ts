import { inject, injectable } from 'tsyringe'
import { AdministratorsRepository } from '../../repositories/implementations/AdministratorsRepository'
import { IAdministrator } from '../../repositories/interfaces/administrator'

@injectable()
export class ListAdministratorsUsecase {
    constructor(
        @inject('AdministratorsRepository')
        private administratorsRepository: AdministratorsRepository
    ) { }

    async execute(): Promise<IAdministrator[]> {
        const administrators = await this.administratorsRepository.list()
        return administrators
    }
}