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
import { Usuario } from "./usuarios/dtoUsuario/Usuario";
import { Imagen } from "./imagenes/dto/Imagen";
import { Album } from "./albumes/dto/Album";
import { AlbumximagenesController } from "./albumximagenes/albumximagenes.controller";
import { AlbumximagenesService } from "./albumximagenes/albumximagenes.service";
import { AlbumxImagen } from "./albumximagenes/dto/AlbumxImagen";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pictures",
            entities: [Usuario, Imagen, Album, AlbumxImagen],
            synchronize: true, //esto es solo para desarrollo
        }),
        TypeOrmModule.forFeature([Usuario]),
    ],
    controllers: [AppController, ImagenesController, AlbumesController, UsuariosController, AuthController, AlbumximagenesController, AlbumximagenesController],
    providers: [AppService, ImagenesService, AlbumesService, UsuariosService, AlbumximagenesService],
})
export class AppModule {}
