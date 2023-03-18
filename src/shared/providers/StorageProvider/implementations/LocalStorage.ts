import { IStorageProvider } from '../interfaces/storage'
import fs from 'fs'
import { resolve } from 'path'
import { tmpFolder } from '../../../../config/multer'

export class LocalStorageProvider implements IStorageProvider {
    async save(file: string, folder: string): Promise<string> {
        await fs.promises.rename(resolve(tmpFolder, file),
            resolve(`${tmpFolder}/${folder}`, file))
        return file
    }
    async delete(file: string, folder: string): Promise<void> {
        const fileName = resolve(`${tmpFolder}/${folder}`, file)
        try {
            await fs.promises.stat(fileName)
        } catch (error) {
            console.log(error)
        }
        await fs.promises.unlink(fileName)
    }
}