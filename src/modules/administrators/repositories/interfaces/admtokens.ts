import { IAdmToken } from './admtoken'

export interface IAdmTokens {
    create({ adm_id, token, expires_date }: IAdmToken): Promise<void>;
}