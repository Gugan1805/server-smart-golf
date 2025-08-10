// data-source.ts
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Role } from './roles/role.entity';
import { User } from './users/user.entity';
import { CreateRoleTable1754834473418 } from './migrations/1754834473418-CreateRoleTable';
import { CreateRoleSeeder1754834688489 } from './migrations/1754834688489-CreateRoleSeeder';
import { CreateUserTable1754834785394 } from './migrations/1754834785394-CreateUserTable';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL as string,
  synchronize: false,
  logging: true,
  entities: [Role, User],
  migrations: [CreateRoleTable1754834473418, CreateRoleSeeder1754834688489, CreateUserTable1754834785394],
});
