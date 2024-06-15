import { IsNumber, IsOptional, IsString } from "class-validator";

export class UsuarioUpdateDto {
    @IsString()
    @IsOptional()
    readonly nombre: string;
    @IsNumber()
    @IsOptional()
    readonly edad: number;
    @IsString()
    @IsOptional()
    readonly correo: string;
    @IsString()
    @IsOptional()
    readonly contraseña: string;
}
