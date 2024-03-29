import { AppError } from '../../../../errors/appError';
import { IAdministrators, IUpdateAdministrator } from '../../repositories/interfaces/administrators';
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs';

@injectable()
export class UpdateAdmUsecase {
    constructor(
        @inject('AdministratorsRepository')
        private administratorsRepository: IAdministrators
    ) { }

    async execute({email, password} : IUpdateAdministrator): Promise<void> {

        const administrator = await this.administratorsRepository.findByEmail(email)

        if (!administrator) {
            throw new AppError(404, 'Administrator not found.')
        }

        if (!password) {
            throw new AppError(403, 'Password is required.')
        }

        const hashPassword = await hash(password, 8)

        await this.administratorsRepository.update({email, password: hashPassword})
    }

}