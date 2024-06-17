import { IsNumber, IsOptional } from "class-validator";

export class AlbumxImagenUpdateDto {
    @IsNumber()
    @IsOptional()
    readonly albumId: number;
    @IsNumber()
    @IsOptional()
    readonly imagenId: number;
}
