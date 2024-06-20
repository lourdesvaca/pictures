import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsuariosService } from "../usuarios/usuarios.service";
import { JwtService } from "@nestjs/jwt";
import { stringToSha1 } from "./crypto.utils";

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usuariosService.getByEmail(username);
        const hashedPass = stringToSha1(pass);
        if (user?.password !== hashedPass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
