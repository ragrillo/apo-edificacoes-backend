import IBaseService from './base.service';
import { IFormularioRepository } from '../repositories/formulario.repository';
import { FormularioDTO, FormularioModel } from '../models/formulario.model';

interface IFormularioService extends IBaseService<FormularioModel, FormularioDTO> {}

class FormularioService implements IFormularioService {
  constructor(private readonly repository: IFormularioRepository) {}

  async create(data: FormularioDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<FormularioModel[]> {
    const formularios: FormularioModel[] = await this.repository.findAll();

    return formularios;
  }

  async findById(id: string): Promise<FormularioModel> {
    const formulario: FormularioModel = await this.repository.findById(id);

    return formulario;
  }

  async update(id: string, data: FormularioDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IFormularioService, FormularioService };
