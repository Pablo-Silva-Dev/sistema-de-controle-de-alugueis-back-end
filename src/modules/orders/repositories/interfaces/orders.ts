import { IFinishOrder, IOrder, IUpdateOrder } from "./order";

export interface IOrdersRepository {
    create({
        client_id,
        client_name,
        client_cpf,
        client_cnpj,
        client_phone,
        client_email,
        client_address_cep,
        client_address_city,
        client_address_complement,
        client_address_neighborhood,
        client_address_reference_point,
        client_address_residence_number,
        client_address_street,
        days_to_expire_rent,
        total_days,
        finished,
        rent_date_start,
        rent_date_return,
        total,
        reminder_order_email_sent,
        payment_id
    }: IOrder): Promise<IOrder>
    list(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listFinishedOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listFinishedWithJustificationOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listActiveOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listLateOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listNextToExpireOrders(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listPaginatedOrdersByClient(client_id: string, itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listOrdersByPeriod(
        periodInDays: number,
        itemsPerPage: number,
        page: number
    ): Promise<IOrder[]>;
    listOrdersByPeriodAndStatus(
        periodInDays: number,
        status: string,
        itemsPerPage: number,
        page: number
    ): Promise<IOrder[]>;
    findByVoucherCode(voucher_code: string): Promise<IOrder>;
    findById(id: string): Promise<IOrder>
    delete(id: string): Promise<void>
    update({
        rent_date_return,
        rent_date_start,
        total,
        last_warning_date
    }: IUpdateOrder): Promise<void>
    updateTime(id: string, days_to_expire_rent: number) : Promise<void>
    finishOrder({ id }: IFinishOrder): Promise<void>
}