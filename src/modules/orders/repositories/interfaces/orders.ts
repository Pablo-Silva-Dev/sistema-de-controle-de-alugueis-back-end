import { IOrder, IUpdateOrder } from "./order";

export interface IOrdersRepository {
    create({
        client_id,
        client_name,
        client_cpf,
        client_cnpj,
        rent_date_start,
        rent_date_return,
        voucher_code,
        total
    }: IOrder): Promise<void>
    list(itemsPerPage?: number, page?: number): Promise<IOrder[]>
    listOrdersByClient(client_id: string): Promise<IOrder[]>
    listOrdersByPeriod(periodInDays: number, finalDate: Date): Promise<IOrder[]>;
    findByVoucherCode(voucher_code: string): Promise<IOrder>;
    findById(id: string): Promise<IOrder>
    delete(id: string): Promise<void>
    update({
        rent_date_return,
        rent_date_start,
        total
    }: IUpdateOrder): Promise<void>
}