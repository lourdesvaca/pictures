import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Imagen } from "../../imagenes/dto/Imagen";
import { Album } from "../../albumes/dto/Album";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;

    @Column()
    edad: number;

    @Column()
    correo: string;

    @Column()
    contraseña: string;

    @OneToMany(() => Imagen, imagen => imagen.usuario)
    imagenes?: Imagen[];

    @OneToMany(() => Album, album => album.usuario)
    albumes?: Album[];
}
