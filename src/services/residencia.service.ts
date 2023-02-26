import IBaseService from './base.service';
import { IResidenciaRepository } from '../repositories/residencia.repository';
import { ResidenciaModel } from '../models/unidade.model';

interface IResidenciaService extends IBaseService<ResidenciaModel> {}

class ResidenciaService implements IResidenciaService {
  constructor(private readonly repository: IResidenciaRepository) {}

  async findAll(): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await this.repository.findAll();

    return residencias;
  }
}

export { IResidenciaService, ResidenciaService };
