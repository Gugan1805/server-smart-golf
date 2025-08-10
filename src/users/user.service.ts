import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => getRepositoryToken(User)))
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: { name: string }): string {
    return `User with name ${createUserDto.name} created!`;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
