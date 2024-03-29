import { IItem } from "./item";
export interface IUpdateItem {
    id: string
    description: string;
    description_long: string;
    price: number;
    quantity?: number;
    last_warning_date?: Date;
}

export interface IUpdateItemStatus{
    id: string;
    stock: number;
}

export interface IItemsRepository {
    create(data: IItem): Promise<void>;
    list(itemsPerPage?: number, page?: number): Promise<IItem[]>;
    findById(id: string): Promise<IItem>;
    delete(id: string): Promise<void>
    update({
        description,
        description_long,
        price,
        last_warning_date
    }: IUpdateItem): Promise<void>
    updateItemStock({
        id,
        stock,
    }: IUpdateItemStatus): Promise<void>
}