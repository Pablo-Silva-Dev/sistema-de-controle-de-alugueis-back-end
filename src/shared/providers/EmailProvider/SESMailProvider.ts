import aws from 'aws-sdk'
import fs from 'fs'
import handlebars from 'handlebars'
import nodemailer, { Transporter } from 'nodemailer'
import { injectable } from 'tsyringe'
import { IMailProvider } from './interfaces/mailProvider'

@injectable()
export class SESMailProvider implements IMailProvider {

    private client: Transporter

    constructor() {
        const transporter = nodemailer.createTransport({
            SES: new aws.SES({
                apiVersion: '2012-11-05',
                region: 'sa-east-1',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                accessKeyId: process.env.AWS_ACCESS_KEY_ID
            })
        })

        this.client = transporter
    }

    async sendEmail(
        from: string,
        to: string,
        subject: string,
        variables?: any,
        templatePath?: string
    ): Promise<void> {
        const templateFileContent = fs.readFileSync(templatePath, 'utf8')
        const templateParse = handlebars.compile(templateFileContent)
        const templateHTML = templateParse(variables)

        await this.client.sendMail({
            from,
            to,
            subject,
            html: templateHTML
        })
    }
}
