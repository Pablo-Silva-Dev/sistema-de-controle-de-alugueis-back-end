import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { authCredentials } from '../../../../config/auth'
import { AppError } from '../../../../errors/appError'
import { DateProvider } from '../../../../shared/providers/DateProvider/implementations/DateProvider'
import { AdministratorsRepository } from '../../../administrators/repositories/implementations/AdministratorsRepository'
import { AdmTokensRepository } from '../../../administrators/repositories/implementations/AdmTokensRepository'

interface IAuthenticationResponse {
    administrator: {
        name: string;
        email: string;
    };
    token: string
}

interface IRequest {
    email: string
    password: string
}


@injectable()
export class AuthenticateAdmUsecase {
    constructor(
        @inject('AdministratorsRepository')
        private administratorsRepository: AdministratorsRepository,
        @inject('AdmTokensRepository')
        private admTokensRepository: AdmTokensRepository,
        @inject('DateProvider')
        private dateProvider: DateProvider
    ) { }

    async execute({ email, password } : IRequest): Promise<IAuthenticationResponse> {
        const administrator = await this.administratorsRepository.findByEmail(email);

        if (!administrator) {
            throw new AppError(404, 'Administrator not found.')
        }

        const passwordMatch = await compare(password, administrator.password)

        if (!passwordMatch) {
            throw new AppError(403, 'Password or email incorrect.')
        }

        const {
            expires_in_token,
            secret_token,
            expiration_time_token
        } = authCredentials

        const token = sign({}, secret_token, {
            subject: administrator.id,
            expiresIn: expires_in_token
        })

        const token_expires_days = this.dateProvider.addDays(expiration_time_token)

        await this.admTokensRepository.create({
            adm_id: administrator.id,
            token: secret_token,
            expires_date: token_expires_days
        })

        const tokenReturn: IAuthenticationResponse = {
            administrator: {
                name: administrator.name,
                email: administrator.email
            },
            token,
        }

        return tokenReturn
    }
}