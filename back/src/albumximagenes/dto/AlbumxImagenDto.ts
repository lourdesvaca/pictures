import { IsNotEmpty, IsNumber } from "class-validator";

export class AlbumxImagen {
    @IsNumber()
    @IsNotEmpty()
    readonly albumId: number;
    @IsNumber()
    @IsNotEmpty()
    readonly imagenId: number;
}
