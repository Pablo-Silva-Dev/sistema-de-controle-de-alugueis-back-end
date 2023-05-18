import 'reflect-metadata'
import express, { json } from 'express';
import 'express-async-errors'
import cors from 'cors'
import 'dotenv/config'


import '../../../shared/database'
import '../../containers'
import { routes } from './routes'
import { AppError } from '../../../errors/appError';

const app = express()

app.use(cors({
    origin: 'https://sistema-de-controle-de-alugueis.pscode.com.br'
}))
app.options('*', cors())
app.use(json())
app.use(routes)

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: `Internal server error: ${err.message}`
    })
})

app.listen(3334, () => {
    console.log('App running on 3334');
})