import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuarios/dtoUsuario/Usuario";
import { AlbumxImagen } from "../../albumximagenes/dto/AlbumxImagen";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => Usuario, usuario => usuario.albumes, { onDelete: "CASCADE" })
    usuario: Usuario; //esto es para declarar que  utiliza usuario_id como foranea

    @OneToMany(() => AlbumxImagen, albumximagen => albumximagen.album)
    albumximagenes?: AlbumxImagen[]; //esto explica que album va a ser utilizada en otra área
}
