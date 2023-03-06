import IBaseService from './base.service';
import { IResidenciaRepository } from '../repositories/residencia.repository';
import { ResidenciaDTO, ResidenciaModel } from '../models/unidade.model';

interface IResidenciaService extends IBaseService<ResidenciaModel, ResidenciaDTO> {
  findByProprietarioId(id: string): Promise<ResidenciaModel[]>;
}

class ResidenciaService implements IResidenciaService {
  constructor(private readonly repository: IResidenciaRepository) {}
  
  async create(data: ResidenciaDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await this.repository.findAll();

    return residencias;
  }

  async findById(id: string): Promise<ResidenciaModel> {
    const residencia: ResidenciaModel = await this.repository.findById(id);

    return residencia;
  }

  async findByProprietarioId(id: string): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await this.repository.findByProprietarioId(id);

    return residencias;
  }

  async update(id: string, data: ResidenciaDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IResidenciaService, ResidenciaService };
