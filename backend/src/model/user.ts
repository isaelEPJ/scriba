import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  type: string;
  @Column()
  notification: string;
  @Column()
  password: string;
  @Column('timestamp with time zone')
  created_at: string;
  @Column('timestamp with time zone')
  altered_at: string;
}
export default Users;
