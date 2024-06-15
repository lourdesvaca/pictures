import { Usuario } from "./dto/Usuario";
import { UsuariosService } from "./usuarios.service";
import { Controller, Get } from "@nestjs/common";

@Controller("usuarios")
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}
    @Get("test")
    getTestUsuarios(): string {
        return this.usuariosService.getTest();
    }

    @Get()
    getUsuarios(): Promise<Usuario[]> {
        return this.usuariosService.getUsuarioList();
    }
}
