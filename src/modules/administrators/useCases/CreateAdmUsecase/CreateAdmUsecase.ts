import { inject, injectable } from 'tsyringe'
import { AdministratorsRepository } from '../../repositories/implementations/AdministratorsRepository'
import { IAdministrator } from '../../repositories/interfaces/administrator'
import { AppError } from '../../../../errors/appError'
import { hash } from 'bcryptjs'

@injectable()
export class CrateAdministratorUsecase {
    constructor(
        @inject('AdministratorsRepository')
        private administratorsRepository: AdministratorsRepository
    ) { }

    async execute({ name, email, password }: IAdministrator): Promise<void> {

        const administrator = await this.administratorsRepository.findByEmail(email)

        if (administrator) {
            throw new AppError(403, 'Administrator already exists.')
        }

        const encryptedPassword = await hash(password, 8)

        await this.administratorsRepository.create({ name, email, password: encryptedPassword })
    }
}