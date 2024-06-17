import { IsNotEmpty, IsNumber } from "class-validator";

export class ImagenDto {
    @IsNumber()
    @IsNotEmpty()
    readonly usuarioId: number; //edad, correo, contraseña
}
