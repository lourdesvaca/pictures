import { Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuarios/dtoUsuario/Usuario";
import { AlbumxImagen } from "../../albumximagenes/dto/AlbumxImagen";

@Entity()
export class Imagen {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Usuario, usuario => usuario.imagenes, { onDelete: "CASCADE" })
    usuario: Usuario;

    @ManyToMany(() => AlbumxImagen, albumximagen => albumximagen.imagen)
    albumximagenes?: AlbumxImagen[];
}

/*
imagen[id, usuario]
album[id, nombre, usuario]
albumximagen[id, idalbum, idimagen]
*/
