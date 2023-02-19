import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('administrators')
class Administrator {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Administrator }