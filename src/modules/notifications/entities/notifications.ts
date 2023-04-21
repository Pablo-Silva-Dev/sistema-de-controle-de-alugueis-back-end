import { Entity, PrimaryColumn, CreateDateColumn, Column } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('notifications')
export class Notification {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    category: string;

    @Column()
    read?: boolean;

    @Column()
    print_number?: number

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