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
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    user_open_id: string;
    @Column()
    user_close_id: string;
    @Column()
    priority: string;
    @Column()
    client_id: string;
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
    @Column('timestamp')
    prazo: Date;
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    updated_at: Date;
}
export default Appointment;
