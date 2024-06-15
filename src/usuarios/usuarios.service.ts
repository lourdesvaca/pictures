import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "./dto/Usuario";

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuariosRepository: Repository<Usuario>,
    ) {}

    getTest(): string {
        return "lista de usuarios";
    }

    getUsuarioList(): Promise<Usuario[]> {
        return this.usuariosRepository.find();
    }
    getUsuarioById(id: number): Promise<Usuario | null> {
        return this.usuariosRepository.findOneBy({ id });
    }
    insertUsuario(usuario: Usuario): Promise<Usuario> {
        return this.usuariosRepository.save(usuario);
    }
    async updateUsuario(id: number, usuario: Usuario): Promise<Usuario> {
        await this.usuariosRepository.update(id, usuario);
        return this.usuariosRepository.findOneBy({ id });
    }
    async deleteUsuario(id: number): Promise<void> {
        await this.usuariosRepository.delete(id);
    }
}
