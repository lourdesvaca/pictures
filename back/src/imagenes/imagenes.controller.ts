import { ImagenDto } from "./dto/ImagenDto";
import { Imagen } from "./dto/Imagen";
import { ImagenUpdateDto } from "./dto/ImagenUpdateDto";
import { ImagenesService } from "./imagenes.service";
import { Controller, Get, Post, Put, Patch, Delete, NotFoundException, Body, Param, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("imagenes")
export class ImagenesController {
    constructor(private readonly imagenesService: ImagenesService) {}
    @Get()
    getImagens(): Promise<Imagen[]> {
        return this.imagenesService.getImagenesList();
    }
    @Get(":id")
    async getImagenById(@Param("id") id: number): Promise<Imagen | null> {
        const objImagen = await this.imagenesService.getImagenById(id);
        if (!objImagen) {
            throw new NotFoundException();
        }
        return objImagen;
    }

    @Post()
    insert(@Body() imagen: ImagenDto): Promise<Imagen> {
        return this.imagenesService.insertImagen(imagen);
    }
    @Post(":id/upload")
    @UseInterceptors(FileInterceptor("fotito", multerOptions))
    async uploadFile(@Param("id") id: number, @UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new NotFoundException("El campo foto es requerido");
        }

        const imagen = await this.imagenesService.saveImageFile(id, file.filename);
        return { message: "Imagen subida correctamente", imagen };
    }
    @Put(":id")
    async updatePut(@Param("id") id: number, @Body() imagen: ImagenDto): Promise<Imagen> {
        const objImagen = await this.imagenesService.getImagenById(id);
        if (!objImagen) {
            throw new NotFoundException();
        }
        return this.imagenesService.updateImagen(id, imagen);
    }
    @Patch(":id")
    async updatePatch(@Param("id") id: number, @Body() imagen: ImagenUpdateDto): Promise<Imagen> {
        const objImagen = await this.imagenesService.getImagenById(id);
        if (!objImagen) {
            throw new NotFoundException();
        }
        return this.imagenesService.updateImagen(id, {
            ...imagen,
        });
    }
    @Delete(":id")
    async delete(@Param("id") id: number): Promise<void> {
        const objImagen = await this.imagenesService.getImagenById(id);
        if (!objImagen) {
            throw new NotFoundException();
        }
        return this.imagenesService.deleteImagen(id);
    }
}
