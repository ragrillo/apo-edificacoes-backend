import IBaseService from './base.service';
import { IEscolaRepository } from '../repositories/escola.repository';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';

interface IEscolaService extends IBaseService<EscolaModel, EscolaDTO> {}

class EscolaService implements IEscolaService {
  constructor(private readonly repository: IEscolaRepository) {}

  async create(data: EscolaDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await this.repository.findAll();

    return escolas;
  }

  async findById(id: string): Promise<EscolaModel> {
    const escola: EscolaModel = await this.repository.findById(id);

    return escola;
  }
}

export { IEscolaService, EscolaService };
