import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: String;
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
    active: boolean;
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
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    updated_at: Date;
}
export default Client;
