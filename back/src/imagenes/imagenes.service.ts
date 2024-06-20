import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Imagen } from "./dto/Imagen";
import { ImagenDto } from "./dto/ImagenDto";
import { ImagenUpdateDto } from "./dto/ImagenUpdateDto";
import { Usuario } from "@/usuarios/dtoUsuario/Usuario";
import { Album } from "@/albumes/dto/Album";
import { AlbumxImagen } from "@/albumximagenes/dto/AlbumxImagen";

@Injectable()
export class ImagenesService {
    constructor(
        @InjectRepository(Imagen)
        private imagenesRepository: Repository<Imagen>,
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        @InjectRepository(Album)
        private albumesRepository: Repository<Album>,
        @InjectRepository(AlbumxImagen)
        private albumxImagenesRepository: Repository<AlbumxImagen>,
    ) {}
    getImagenesList(): Promise<Imagen[]> {
        return this.imagenesRepository.find({ relations: ["usuario"] });
    }
    getImagenById(id: number): Promise<Imagen | null> {
        return this.imagenesRepository.findOne({ relations: ["usuario"], where: { id } });
    }
    async insertImagen(imagen: ImagenDto): Promise<Imagen> {
        const usuario = await this.usuarioRepository.findOneBy({ id: imagen.usuarioId });
        if (!usuario) {
            throw new NotFoundException("usuario not found");
        }
        const newImagen = this.imagenesRepository.create({ ...imagen, usuario });
        return this.imagenesRepository.save(newImagen);
    }
    async saveImageFile(albumId: number, filename: string): Promise<Imagen> {
        const album = await this.albumesRepository.findOne({ where: { id: albumId }, relations: ["usuario"] });
        if (!album) {
            throw new NotFoundException("Album no encontrado");
        }

        const newImagen = this.imagenesRepository.create({ usuario: album.usuario });
        const savedImagen = await this.imagenesRepository.save(newImagen);

        const albumxImagen = this.albumxImagenesRepository.create({ album, imagen: savedImagen });
        await this.albumxImagenesRepository.save(albumxImagen);
//``
        const fs = require("fs");
        const path = require("path");
        const oldPath = path.join(__dirname, "../../public/images/albumes", filename);
        const newPath = path.join(__dirname, "../../public/images/albumes", ${savedImagen.id},${path.extname(filename)});
        fs.renameSync(oldPath, newPath);

        return savedImagen;
    }
    async updateImagen(id: number, imagen: ImagenUpdateDto): Promise<Imagen> {
        const usuario = await this.usuarioRepository.findOneBy({ id: imagen.usuarioId });
        if (!usuario) {
            throw new NotFoundException("usuario not found");
        }
        const imagenDb = await this.imagenesRepository.findOneBy({ id });
        if (!imagenDb) {
            throw new NotFoundException("imagen not found");
        }
        if (usuario) {
            imagenDb.usuario = usuario;
        }
        await this.imagenesRepository.update(id, imagenDb);
        return this.imagenesRepository.findOneBy({ id });
    }
    async deleteImagen(id: number): Promise<void> {
        await this.imagenesRepository.delete(id);
    }
}
