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
    client_id: string

    @Column()
    client_name: string

    @Column()
    client_cpf?: string

    @Column()
    client_cnpj?: string

    @Column()
    client_phone: string

    @Column()
    client_email: string

    @Column()
    client_address_cep: string

    @Column()
    client_address_city: string

    @Column()
    client_address_complement: string

    @Column()
    client_address_neighborhood: string

    @Column()
    client_address_residence_number: string

    @Column()
    client_address_street: string

    @Column()
    client_address_reference_point?: string

    @Column()
    finished: boolean
    
    @CreateDateColumn()
    rent_date_start: Date;
    
    @CreateDateColumn()
    rent_date_return?: Date;
    
    @CreateDateColumn()
    last_warning_date?: Date;
    
    @Column()
    total: number
    
    @Column()
    days_to_expire_rent: number
    
    @Column()
    total_days: number
    
    @Column("jsonb", { nullable: true })
    items: IItem[]
    
    @Column()
    divergence_justification?: string
    
    @Column()
    reminder_order_email_sent: boolean

    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client

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