import { verify } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { authCredentials } from '../../../../config/auth'
import { AppError } from '../../../../errors/appError'

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError(401, 'Missing token.')
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub: administrator_id } = verify(token, authCredentials.secret_token) as IPayload

        req.administrator = {
            id: administrator_id
        }
        next()
    } catch (error) {
        console.log(error)
        throw new AppError(403, 'Forbidden access. Invalid token.')
    }
}