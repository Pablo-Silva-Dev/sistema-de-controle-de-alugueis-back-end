import { Repository, getRepository } from 'typeorm'
import { IAdmToken } from '../interfaces/admtoken'
import { IAdmTokens } from '../interfaces/admtokens'
import { AdmToken } from '../../entities/admtokens'

export class AdmTokensRepository implements IAdmTokens {

    private repository: Repository<AdmToken>
    constructor() {
        this.repository = getRepository(AdmToken)
    }

    async create({ adm_id, token, expires_date }: IAdmToken): Promise<void> {
        const newAdmToken = await this.repository.create({ adm_id, token, expires_date })
        await this.repository.save(newAdmToken)
    }

}