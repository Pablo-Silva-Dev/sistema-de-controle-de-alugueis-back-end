export interface IItem {
    id?: string;
    description: string;
    price: number;
    stock: number;
    available_for_rent?: boolean;
    quantity?: number;
    description_long?: string;
    image?: string;
}