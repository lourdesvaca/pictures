import { IsOptional, IsString } from "class-validator";

export class AlbumDto {
    @IsString()
    @IsOptional()
    readonly nombre: string;
    @IsString()
    @IsOptional()
    readonly usuarioId: number; //edad, correo, contraseña
}
