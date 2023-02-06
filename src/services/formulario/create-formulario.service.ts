import { Formulario } from '../../models/formulario.model';
import { CreateFormularioDTO, ICreateFormularioRepository } from '../../repositories/formulario/create-formulario.repository';

export interface ICreateFormularioService {
  handle(data: CreateFormularioDTO): Promise<Formulario>;
}

export class CreateFormularioService implements ICreateFormularioService {
  constructor(private createFormularioRepository: ICreateFormularioRepository) {}

  async handle(data: CreateFormularioDTO): Promise<Formulario> {
    const formulario = await this.createFormularioRepository.handle(data);

    return formulario;
  }
}
