import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Thiva.123',
      database: 'smart_golf',
      entities: [User],
      migrations: ['src/migrations/2025-08-10-160500-CreateUsersTable.js'],
      synchronize: true,
    }),
  ],
  // controllers: [UsersController],
  providers: [UsersService],
})

export class UserModule {}
