import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Appointment from './Appointment';

@Entity('users')
class User {
    @OneToMany(() => Appointment, (appointment) => appointment.user_open)
    @JoinColumn({ name: 'id' })
    id_appointment_open: Appointment;
    @OneToMany(() => Appointment, (appointment) => appointment.user_close)
    @JoinColumn({ name: 'id' })
    id_appointment_close: Appointment;
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
