import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Client from './Client';
import User from './User';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    user_open_id: string;
    @ManyToMany(() => User)
    @JoinColumn({ name: 'user_open_id' })
    user_open: User;
    @Column()
    user_close_id: string;
    @ManyToMany(() => User)
    @JoinColumn({ name: 'user_close_id' })
    user_close: User;
    @Column()
    priority: string;
    @Column()
    client_id: string;
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client;
    @Column()
    type: string;
    @Column()
    content: String;
    @Column()
    conclusion: string;
    @Column()
    note: string;
    @Column()
    email_content: string;
    @Column()
    conclude: boolean;
    @Column()
    finished: boolean;
    @Column()
    canceled: boolean;
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    altered_at: Date;
}
export default Appointment;
