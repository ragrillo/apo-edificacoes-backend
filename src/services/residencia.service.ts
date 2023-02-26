import IBaseService from './base.service';
import { IResidenciaRepository } from '../repositories/residencia.repository';
import { ResidenciaDTO, ResidenciaModel } from '../models/unidade.model';

interface IResidenciaService extends IBaseService<ResidenciaModel, ResidenciaDTO> {}

class ResidenciaService implements IResidenciaService {
  constructor(private readonly repository: IResidenciaRepository) {}
  
  async create(data: ResidenciaDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await this.repository.findAll();

    return residencias;
  }
}

export { IResidenciaService, ResidenciaService };
