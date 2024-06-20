import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "./dto/Album";
import { Repository } from "typeorm";
import { Usuario } from "@/usuarios/dtoUsuario/Usuario";

@Injectable()
export class AlbumsService {
    constructor(
        @InjectRepository(Album)
        private albumesRepository: Repository<Album>,
        @InjectRepository(Usuario)
        private usuariosRepository: Repository<Usuario>,
    ) {}
}