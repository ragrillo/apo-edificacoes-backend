import IBaseService from './base.service';
import { IEscolaRepository } from '../repositories/escola.repository';
import { EscolaModel } from '../models/unidade.model';

interface IEscolaService extends IBaseService<EscolaModel> {}

class EscolaService implements IEscolaService {
  constructor(private readonly repository: IEscolaRepository) {}

  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await this.repository.findAll();

    return escolas;
  }
}

export { IEscolaService, EscolaService };
