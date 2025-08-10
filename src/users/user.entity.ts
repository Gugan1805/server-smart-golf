
import { Role } from '../roles/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @ManyToOne(type => Role, role => role.role)
    role: Role;
}
