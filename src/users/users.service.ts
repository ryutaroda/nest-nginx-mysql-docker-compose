import {Injectable} from "@nestjs/common";
import {UsersRepository} from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {
    }

    async create(username: string, hashedPassword: string) {
        return await this.usersRepository.save({username, hashedPassword});
    }

    async findUserByName(username: string) {
        return this.usersRepository.findOneBy({ username })
    }
}