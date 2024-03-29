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
    last_warning_date?: Date;
    total: number;
    client_id: string;
    items?: IOrderItem[]
    divergence_justification?: string
    reminder_order_email_sent?: boolean;
    payment_id: number;
}

export interface IUpdateOrder{
    id: string;
    rent_date_start?: Date;
    rent_date_return?: Date;
    total?: number;
    last_warning_date?: Date;
}

export interface IFinishOrder{
    id: string;
    divergence_justification?: string
}

export interface IUpdateOrderSendingEmailStatus{
    id: string;
    reminder_order_email_sent: boolean;
}