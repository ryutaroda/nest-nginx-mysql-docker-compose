import {Injectable} from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import {Strategy} from "passport-local";
import {ExtractJwt} from "passport-jwt";
import {jwtConstants} from "./constants";


interface JWTPayload {
    userID: string,
    username: string,
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: JWTPayload) {
        return { userID: payload.userID, username: payload.username }
    }
}