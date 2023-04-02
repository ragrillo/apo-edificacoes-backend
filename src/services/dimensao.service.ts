import { IDimensaoRepository } from '../repositories/dimensao.repository';
import { DimensaoModel, DimensaoModelDTO } from '../models/dimensao.model';

interface IDimensaoService {
    findAll(): Promise<DimensaoModel[]>;
    update(id: string, payload: DimensaoModelDTO): Promise<void>;
}

class DimensaoService implements IDimensaoService {
    constructor(private readonly repository: IDimensaoRepository) {}

    async findAll(): Promise<DimensaoModel[]> {
        const dimensoes = await this.repository.findAll();
        return dimensoes;
    }

    async update(id: string, dimensao: DimensaoModelDTO): Promise<void> {
        await this.repository.update(id, dimensao);
    }
}

export { IDimensaoService, DimensaoService };
