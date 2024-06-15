import { Test, TestingModule } from "@nestjs/testing";
import { AlbumximagenesController } from "./albumximagenes.controller";

describe("AlbumximagenesController", () => {
    let controller: AlbumximagenesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AlbumximagenesController],
        }).compile();

        controller = module.get<AlbumximagenesController>(AlbumximagenesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
