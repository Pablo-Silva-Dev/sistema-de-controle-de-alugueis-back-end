import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('items')
class Item {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity?: number;

    @Column()
    stock: number;

    @Column()
    available_for_rent?: boolean;

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

export { Item }