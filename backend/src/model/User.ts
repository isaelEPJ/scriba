import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    admin: boolean;
    @Column()
    active: boolean;
    @Column()
    phone: string;
    @Column()
    type: string;
    @Column()
    avatar: string;
    @Column()
    notification: string;
    @Column('timestamp with time zone')
    created_at: Date;
    @Column('timestamp with time zone')
    altered_at: Date;
}
export default User;
