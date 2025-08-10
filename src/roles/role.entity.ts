
import { User } from '../users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn , OneToMany} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  role: number;

  @Column()
  rgba: string;

  @OneToMany(type => Role, (user) => user.role)
  user: User;
}
