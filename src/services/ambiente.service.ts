import IBaseService from './base.service';
import { IAmbienteRepository } from '../repositories/ambiente.repository';
import { AmbienteDTO, AmbienteModel } from '../models/ambiente.model';

interface IAmbienteService extends IBaseService<AmbienteModel, AmbienteDTO> {}

class AmbienteService implements IAmbienteService {
  constructor(private readonly repository: IAmbienteRepository) {}

  async create(data: AmbienteDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<AmbienteModel[]> {
    const ambientes: AmbienteModel[] = await this.repository.findAll();

    return ambientes;
  }

  async findById(id: string): Promise<AmbienteModel> {
    const ambiente: AmbienteModel = await this.repository.findById(id);

    return ambiente;
  }

  async update(id: string, data: AmbienteDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IAmbienteService, AmbienteService };
