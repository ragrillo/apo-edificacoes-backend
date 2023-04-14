import { Router, Request, Response } from 'express';

import { DimensaoMongoRepository } from '../repositories/dimensao.repository';
import { DimensaoService } from '../services/dimensao.service';
import { DimensaoController, IDimensaoController } from '../controllers/dimensao.controller';

class DimensaoRouter {
    public router: Router;
    private dimensaoController: IDimensaoController;

    constructor() {
        this.router = Router();
        this.dimensaoController = this.makeDimensaoController();
        this.routes();
    }

    private makeDimensaoController(): IDimensaoController {
        const dimensaoRepository = new DimensaoMongoRepository();
        const dimensaoService = new DimensaoService(dimensaoRepository);
        const dimensaoController = new DimensaoController(dimensaoService);

        return dimensaoController;
    }

    private routes(): void {
        this.router.get('/', async (request: Request, response: Response) => {
            const { statusCode, body } = await this.dimensaoController.findAll();
            return response.status(statusCode).json(body);
        });

        this.router.put('/:id', async (request: Request, response: Response) => {
            const { statusCode, body } = await this.dimensaoController.update(request);
            return response.status(statusCode).json(body);
        });
    }
}

export default DimensaoRouter;
