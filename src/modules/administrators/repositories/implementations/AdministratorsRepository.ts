import { getRepository, Repository } from 'typeorm'
import { Administrator } from '../../entities/administrator'
import { IAdministrator } from '../interfaces/administrator'
import { IAdministrators, IUpdateAdministrator } from '../interfaces/administrators'

export class AdministratorsRepository implements IAdministrators {

    private repository: Repository<Administrator>

    public constructor() {
        this.repository = getRepository(Administrator)
    }

    async create({ name, email, password }: IAdministrator): Promise<void> {
        const administrator = await this.repository.create({ name, email, password })
        await this.repository.save(administrator)
    }
    async list(): Promise<IAdministrator[]> {
        const administrators = await this.repository.find()
        return administrators
    }

    async findByEmail(email: string): Promise<IAdministrator> {
        const administrator = await this.repository.findOne({ email })
        return administrator
    }

    async findById(id: string): Promise<IAdministrator> {
        const administrator = await this.repository.findOne({ id })
        return administrator
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async update({ email, password }: IUpdateAdministrator): Promise<void> {
        await this.repository.update({ email }, { password })
    }

}