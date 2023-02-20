import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Client } from '../../clients/entities/clients'
import { IItem } from '../../items/repositories/interfaces/item'
import { v4 as uuidv4 } from 'uuid'
import { generateVoucherCode } from '../../../shared/utils/generateVoucher';


@Entity('orders')
class Order {
    @PrimaryColumn()
    id: string;

    @Column()
    voucher_code: string

    @Column()
    client_name: string

    @Column()
    client_cpf?: string

    @Column()
    client_cnpj?: string

    @CreateDateColumn()
    rent_date_start: Date;

    @CreateDateColumn()
    rent_date_return?: Date;

    @Column()
    total: number

    @Column("jsonb", { nullable: true })
    items: IItem[]

    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client

    @Column()
    client_id: string

    @CreateDateColumn()
    created_at?: Date;

    @CreateDateColumn()
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
        if (!this.voucher_code) {
            this.voucher_code = generateVoucherCode()
        }
    }

}

export { Order }