import { v4 as uuidv4 } from 'uuid'
import { Entity, CreateDateColumn, PrimaryColumn, Column } from 'typeorm'

@Entity('clients')
class Client {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cpf?: string;

    @Column()
    cnpj?: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    neighborhood: string;

    @Column()
    street: string;

    @Column()
    residence_number: string;

    @Column()
    complement: string;

    @Column()
    city: string;

    @Column()
    cep: string;

    @Column()
    reference_point?: string;

    @CreateDateColumn()
    created_at?: Date;

    @CreateDateColumn()
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Client }