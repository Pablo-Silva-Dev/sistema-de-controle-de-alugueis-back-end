import { IItem } from "./item";
export interface IUpdateItem {
    id: string
    description: string;
    price: number;
    quantity?: number;
}
export interface IItemsRepository {
    create(data: IItem): Promise<void>;
    list(itemsPerPage?: number, page?: number): Promise<IItem[]>;
    findById(id: string): Promise<IItem>;
    delete(id: string): Promise<void>
    update({
        description,
        price,
    }: IUpdateItem): Promise<void>
}