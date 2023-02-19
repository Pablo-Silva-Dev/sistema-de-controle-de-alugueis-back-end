import { IClient } from "./client";
export interface IUpdateClient {
    id: string
    phone: string;
    neighborhood: string;
    street: string;
    residence_number: string;
    complement: string;
    city: string;
    cep: string;
    reference_point: string;
}
export interface IClientsRepository {
    create(data: IClient): Promise<void>;
    list(itemsPerPage?: number, page?: number): Promise<IClient[]>;
    findByEmail(email: string): Promise<IClient>;
    findById(id: string): Promise<IClient>;
    delete(id: string): Promise<void>
    update({
        id,
        cep,
        city,
        neighborhood,
        street,
        residence_number,
        complement,
        phone,
        reference_point
    }: IUpdateClient): Promise<void>
}