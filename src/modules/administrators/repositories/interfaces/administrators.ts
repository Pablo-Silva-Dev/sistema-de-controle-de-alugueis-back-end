import { IAdministrator } from './administrator'


export interface IUpdateAdministrator {
    email: string;
    password: string;
}
export interface IAdministrators {
    create({ name, email, password }: IAdministrator): Promise<void>;
    list(): Promise<IAdministrator[]>;
    findByEmail(email: string): Promise<IAdministrator>;
    findById(id: string): Promise<IAdministrator>;
    delete(id: string): Promise<void>;
    update({ email, password }: IUpdateAdministrator): Promise<void>;
}
