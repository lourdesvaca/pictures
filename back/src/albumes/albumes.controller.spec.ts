import { Test, TestingModule } from "@nestjs/testing";
import { AlbumesController } from "./albumes.controller";

describe("AlbumesController", () => {
    let controller: AlbumesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AlbumesController],
        }).compile();

        controller = module.get<AlbumesController>(AlbumesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
