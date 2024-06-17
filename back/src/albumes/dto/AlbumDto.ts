import { IsNotEmpty, IsString } from "class-validator";

export class AlbumDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
    @IsString()
    @IsNotEmpty()
    readonly usuarioId: number; //edad, correo, contraseña
}
