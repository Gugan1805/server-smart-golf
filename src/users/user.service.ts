// src/auth/auth.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SupabaseClient } from '../supabase/supabase.provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async register(CreateUserDto: CreateUserDto) {
    const { name, email, password, role } = CreateUserDto;

    // Check if user already exists
    const { data: existingUser } = await SupabaseClient
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { data, error } = await SupabaseClient
      .from('users')
      .insert([
        {
          email,
          password: hashedPassword,
          name,
          role
        },
      ])
      .select()
      .single();

    if (error) {
      throw new BadRequestException(error.message);
    }

    return {
      message: 'User registered successfully',
      user: data,
    };
  }
}
