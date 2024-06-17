import { IsNumber, IsOptional } from "class-validator";

export class ImagenUpdateDto {
    @IsNumber()
    @IsOptional()
    readonly usuarioId: number; //edad, correo, contraseña
}
