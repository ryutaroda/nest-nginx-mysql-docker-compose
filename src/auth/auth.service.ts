import {Injectable, NotAcceptableException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../users/entities/user.entity";
import * as bcrypt from 'bcrypt';
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
      private readonly usersService: UsersService,
      private jwtService: JwtService,
  ) {}

  async validateUser(
      username: string,
      password: string,
  ): Promise<Omit<User, 'hashedPassword'> | undefined> {
    const user = await  this.usersService.findUserByName(username);
    if (!user) {
      throw new NotAcceptableException('ユーザーが存在しません.');
    }
    const passwordValid = await bcrypt.compare(password, user.hashedPassword);

    if (passwordValid) {
      const { hashedPassword, ...result } = user;
      return result;
    }

    return undefined;
  }

  async login(loginDto: LoginDto) {
    const payload = { username: loginDto.username, sub: loginDto.id};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
