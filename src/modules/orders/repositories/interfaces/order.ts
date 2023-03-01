interface IOrderItem{
    description?: string;
    price?: number;
    quantity?: number;
}

export interface IOrder{
    id?: string;
    voucher_code?: string;
    client_name:string;
    client_cpf?:string;
    client_cnpj?:string;
    client_email: string;
    client_phone: string;
    client_address_neighborhood: string;
    client_address_street: string;
    client_address_residence_number: string;
    client_address_complement: string;
    client_address_cep: string;
    client_address_city: string;
    days_to_expire_rent: number;
    finished: boolean;
    client_address_reference_point?: string;
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