import { Controller, Get } from "@nestjs/common";
import { AlbumesService } from "./albumes.service";

@Controller("albumes")
export class AlbumesController {
    constructor(private readonly albumesService: AlbumesService) {}
    @Get("testalbumes")
    getAlbumes(): string {
        return this.albumesService.getAlbumes();
    }
}
