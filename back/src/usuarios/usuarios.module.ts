import { Module } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./dtoUsuario/Usuario";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuariosService],
    exports: [UsuariosService],
})
export class UsuariosModule {}
