export interface IMailProvider {
    sendEmail(
        from: string,
        to: string,
        subject: string,
        variables?: any,
        templatePath?: string
    ): Promise<void>
}