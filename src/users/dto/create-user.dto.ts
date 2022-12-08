import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: '名前は必須です。' })
    username: string;

    @IsNotEmpty({ message: 'パスワードは必須です。' })
    password: string;
}