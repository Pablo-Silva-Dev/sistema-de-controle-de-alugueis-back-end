import { AppError } from '../../../../errors/appError';
import { inject, injectable } from 'tsyringe'
import { AdministratorsRepository } from '../../repositories/implementations/AdministratorsRepository'

@injectable()
export class DeleteAdmUsecase {
    constructor(
        @inject('AdministratorsRepository')
        private administratorsRepository: AdministratorsRepository
    ) { }

    async execute(id: string): Promise<void> {
        const administrator = await this.administratorsRepository.findById(id)
        if(!administrator){
            throw new AppError(404, "Administrator not found")
        }
        await this.administratorsRepository.delete(id)
    }
}