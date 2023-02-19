interface IOrderItem{
    description?: string;
    price?: number;
    quantity?: number;
}

export interface IOrder{
    id?: string;
    voucher_code: string;
    client_name:string;
    client_cpf?:string;
    client_cnpj?:string;
    rent_date_start: Date;
    rent_date_return?: Date;
    total: number;
    client_id: string;
    items?: IOrderItem[]
}

export interface IUpdateOrder{
    id: string;
    rent_date_start?: Date;
    rent_date_return?: Date;
    total?: number;
}