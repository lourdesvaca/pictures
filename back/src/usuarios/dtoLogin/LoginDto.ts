import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string; //edad, correo, contraseña
    @IsString()
    @IsNotEmpty()
    readonly contraseña: string;
}
