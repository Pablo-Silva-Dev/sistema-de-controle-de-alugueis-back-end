import { IStorageProvider } from '../interfaces/storage'
import { S3 } from 'aws-sdk'
import { resolve } from 'path'
import fs from 'fs'
import { tmpFolder } from '../../../../config/multer'
import mime from 'mime'

export class S3StorageProvider implements IStorageProvider {

    private client: S3

    constructor() {
        this.client = new S3({
            region: 'sa-east-1'
        })
    }

    async save(file: string, folder: string): Promise<string> {
        const originalName = resolve(tmpFolder, file)
        const fileContent = await fs.promises.readFile(originalName)
        const ContentType = mime.getType(originalName)

        await this.client.putObject({
            Bucket: `${process.env.AWS_BUCKET}`,
            Key: file,
            ACL: 'public-read',
            Body: fileContent,
            ContentType
        }).promise()

        await fs.promises.unlink(originalName)
        return file

    }
    async delete(file: string, folder: string): Promise<void> {
        await this.client.deleteObject({
            Bucket: `${process.env.AWS_BUCKET}/${folder}`,
            Key: file
        }).promise()
    }

}
