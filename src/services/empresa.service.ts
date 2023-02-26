import IBaseService from './base.service';
import { IEmpresaRepository } from '../repositories/empresa.repository';
import { EmpresaDTO, EmpresaModel } from '../models/empresa.model';

interface IEmpresaService extends IBaseService<EmpresaModel, EmpresaDTO> {}

class EmpresaService implements IEmpresaService {
  constructor(private readonly repository: IEmpresaRepository) {}

  async create(data: EmpresaDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<EmpresaModel[]> {
    const empresas: EmpresaModel[] = await this.repository.findAll();

    return empresas;
  }

  async findById(id: string): Promise<EmpresaModel> {
    const empresa: EmpresaModel = await this.repository.findById(id);

    return empresa;
  }

  async update(id: string, data: EmpresaDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IEmpresaService, EmpresaService };
