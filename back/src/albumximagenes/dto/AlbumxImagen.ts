import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Imagen } from "../../imagenes/dto/Imagen";
import { Album } from "../../albumes/dto/Album";

@Entity()
export class AlbumxImagen {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Album, album => album.albumximagenes, { onDelete: "CASCADE" })
    album: Album;

    @ManyToOne(() => Imagen, imagen => imagen.albumximagenes, { onDelete: "CASCADE" })
    imagen: Imagen;
}
