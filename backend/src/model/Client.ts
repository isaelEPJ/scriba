import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import Appointment from './Appointment';

Entity('client');
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: String;
    @OneToOne(() => Appointment, (appointment) => appointment.client)
    @JoinColumn({ name: 'id' })
    id_client: string;

    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    cnpj: string;
    @Column()
    IE: string;
    @Column()
    note: string;
    @Column()
    adress: string;
    @Column()
    city: string;
    @Column()
    bairro: string;
    @Column()
    cep: string;
    @Column()
    contact: string;
    @Column()
    phone: string;
    @Column()
    active: boolean;
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    altered_at: Date;
}
export default Client;
