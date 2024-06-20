import { Injectable } from "@nestjs/common";
import { AlbumxImagen } from "./dto/AlbumxImagen";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "@/albumes/dto/Album";
import { Imagen } from "@/imagenes/dto/Imagen";

@Injectable()
export class AlbumximagenesService {
    constructor(
        @InjectRepository(AlbumxImagen)
        private albumxImagenesRepository: Repository<AlbumxImagen>,
        @InjectRepository(Album)
        private albumesRepository: Repository<Album>,
        @InjectRepository(Imagen)
        private imagenesRepository: Repository<Imagen>,
    ) {}
}
