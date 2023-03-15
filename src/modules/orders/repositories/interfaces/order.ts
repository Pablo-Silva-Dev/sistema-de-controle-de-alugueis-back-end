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
    client_address_reference_point?: string;
    days_to_expire_rent: number;
    total_days: number;
    finished: boolean;
    rent_date_start: Date;
    rent_date_return?: Date;
    total: number;
    client_id: string;
    items?: IOrderItem[]
    divergence_justification?: string
}

export interface IUpdateOrder{
    id: string;
    rent_date_start?: Date;
    rent_date_return?: Date;
    total?: number;
}
export interface IFinishOrder{
    id: string;
    divergence_justification?: string
}