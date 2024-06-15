import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ImagenesController } from "./imagenes/imagenes.controller";
import { AlbumesController } from "./albumes/albumes.controller";
import { ImagenesService } from "./imagenes/imagenes.service";
import { AlbumesService } from "./albumes/albumes.service";
import { UsuariosController } from "./usuarios/usuarios.controller";
import { UsuariosService } from "./usuarios/usuarios.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth/auth.controller";
import { Usuario } from "./usuarios/dto/Usuario";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pictures",
            entities: [Usuario],
            synchronize: true, //esto es solo para desarrollo
        }),
        TypeOrmModule.forFeature([Usuario]),
    ],
    controllers: [AppController, ImagenesController, AlbumesController, UsuariosController, AuthController],
    providers: [AppService, ImagenesService, AlbumesService, UsuariosService],
})
export class AppModule {}
