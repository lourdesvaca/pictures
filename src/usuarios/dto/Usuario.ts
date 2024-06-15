import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;

    @Column()
    correo: string;

    @Column()
    edad: number;

    @Column()
    contraseña: string;
}
