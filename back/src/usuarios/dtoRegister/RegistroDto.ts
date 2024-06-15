import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class RegistroDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string; //edad, correo, contraseña
    @IsNumber()
    @IsPositive()
    readonly edad: number;
    @IsString()
    @IsNotEmpty()
    readonly correo: string;
    @IsString()
    @IsNotEmpty()
    readonly contraseña: string;
}
