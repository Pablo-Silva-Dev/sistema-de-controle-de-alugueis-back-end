export interface IItem {
    description: string;
    price: number;
    stock: number;
    available_for_rent?: boolean;
    quantity?: number;
    description_long?: string;
}