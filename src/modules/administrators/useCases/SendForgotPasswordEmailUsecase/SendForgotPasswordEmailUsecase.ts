import { resolve } from 'path';
import { inject, injectable } from 'tsyringe';
import { IMailProvider } from '../../../../shared/providers/EmailProvider/interfaces/mailProvider'
import { AdministratorsRepository } from '../../repositories/implementations/AdministratorsRepository';
import { AppError } from './../../../../errors/appError';


@injectable()
export class SendForgotPasswordEmailUsecase {
    constructor(
        @inject('SESMailProvider')
        private mailProvider: IMailProvider,
        @inject('AdministratorsRepository')
        private administratorsRepository: AdministratorsRepository
    ) { }

    async execute(email: string) {

        const adm = await this.administratorsRepository.findByEmail(email)

        if (!adm) {
            throw new AppError(404, 'Administrator not found')
        }

        const recoveryCode = Number(Math.random() * 9999999)
            .toFixed(0).toString().substring(0, 4)

        const templatePath = resolve(
            __dirname,
            '..',
            '..',
            'views',
            'emails',
            'forgotPasswordEmailTemplate.hbs'
        )

        const variables = {
            name: adm.name,
            recoveryCode
        }

        await this.mailProvider.sendEmail(
            'pablojmde@gmail.com',
            email,
            'Redefinição de senha',
            variables as any,
            templatePath
        )
    }
}
