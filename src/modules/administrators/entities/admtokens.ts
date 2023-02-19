import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Administrator } from './administrator';
import { v4 as uuidv4 } from 'uuid';

@Entity('admtokens')
class AdmToken {

    @PrimaryColumn()
    id?: string;

    @Column()
    token?: string;

    @Column()
    adm_id?: string;

    @CreateDateColumn()
    expires_date?: Date;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => Administrator)
    @JoinColumn({ name: 'adm_id' })
    adm?: Administrator

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { AdmToken }