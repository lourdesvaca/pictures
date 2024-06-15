import { Injectable } from "@nestjs/common";

@Injectable()
export class AlbumesService {
    getAlbumes(): string {
        return "lista de albumes";
    }
}
