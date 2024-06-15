import { Test, TestingModule } from "@nestjs/testing";
import { AlbumximagenesService } from "./albumximagenes.service";

describe("AlbumximagenesService", () => {
    let service: AlbumximagenesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AlbumximagenesService],
        }).compile();

        service = module.get<AlbumximagenesService>(AlbumximagenesService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
