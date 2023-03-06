export interface IMailProviderResponse{
    email: string;
    recoveryCode?: string;
}

export interface IMailProvider {
    sendEmail(
        from: string,
        to: string,
        subject: string,
        variables?: any,
        templatePath?: string
    ): Promise<IMailProviderResponse>
}