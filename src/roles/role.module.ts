import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Thiva.123',
      database: 'smart_golf',
      entities: [Role],
      migrations: ['src/migrations/2025-08-10-160500-CreateUsersTable.js'],
      synchronize: true,
    }),
  ],
  // controllers: [UsersController],
  providers: [RoleService],
})
export class RoleModule {}
