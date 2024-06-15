import { Usuario } from "./dtoUsuario/Usuario";
import { UsuarioDto } from "./dtoUsuario/UsuarioDto";
import { UsuarioUpdateDto } from "./dtoUsuario/UsuarioUpdateDto";
import { UsuariosService } from "./usuarios.service";
import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put, Delete } from "@nestjs/common";

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

    @Get(":id")
    async getUsuarioById(@Param("id") id: number): Promise<Usuario | null> {
        const objUsuario = await this.usuariosService.getUsuarioById(id);
        if (!objUsuario) {
            throw new NotFoundException();
        }
        return objUsuario;
    }

    @Post()
    insert(@Body() usuario: UsuarioDto): Promise<Usuario> {
        return this.usuariosService.insertUsuario({
            id: 0,
            nombre: usuario.nombre,
            edad: usuario.edad,
            correo: usuario.correo,
            contraseña: usuario.contraseña,
        });
    }
    @Put(":id")
    async updatePut(@Param("id") id: number, @Body() usuario: UsuarioDto): Promise<Usuario> {
        const objUsuario = await this.usuariosService.getUsuarioById(id);
        if (!objUsuario) {
            throw new NotFoundException();
        }
        return this.usuariosService.updateUsuario(id, {
            id,
            nombre: usuario.nombre,
            edad: usuario.edad,
            correo: usuario.correo,
            contraseña: usuario.contraseña,
        });
    }

    @Patch(":id")
    async updatePatch(@Param("id") id: number, @Body() usuario: UsuarioUpdateDto): Promise<Usuario> {
        const objUsuario = await this.usuariosService.getUsuarioById(id);
        if (!objUsuario) {
            throw new NotFoundException();
        }
        return this.usuariosService.updateUsuario(id, {
            ...usuario,
            id,
        });
    }
    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
        const objUsuario = await this.usuariosService.getUsuarioById(id);
        if (!objUsuario) {
            throw new NotFoundException();
        }
        return this.usuariosService.deleteUsuario(id);
    }
}
