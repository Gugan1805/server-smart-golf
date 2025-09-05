import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    role: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    password: string;
}