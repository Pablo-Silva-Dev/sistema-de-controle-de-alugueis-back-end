import { resolve } from 'path';
import { injectable, inject } from 'tsyringe'
import { IMailProvider } from '../../../../shared/providers/EmailProvider/interfaces/mailProvider'
import { ClientsRepository } from '../../../../modules/clients/repositories/implementations/ClientsRepository'
import { AppError } from '../../../../errors/appError'


@injectable()
export class SendOrderGettingCloseEmailUsecase {
    constructor(
        @inject('SESMailProvider')
        private mailProvider: IMailProvider,
        @inject('ClientsRepository')
        private clientsRepository: ClientsRepository
    ) { }

    async execute(email: string) {
        const client = await this.clientsRepository.findByEmail(email)

        if (!client) {
            throw new AppError(404, 'Client not found.')
        }

        const templatePath = resolve(
            __dirname,
            '..',
            '..',
            'views',
            'emails',
            'orderGettingCloseTemplate.hbs'
        )

        const variables = {
            name: client.name
        }
        
        await this.mailProvider.sendEmail(
            'pablojmde@gmail.com',
            email,
            'Lembrete de vencimento de aluguél',
            variables as any,
            templatePath
        )

        return {
            email: client.email,
            message: 'Order getting close reminder sent with success.'
        }

    }
}