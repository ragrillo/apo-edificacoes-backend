import { Residencia } from '../../../models/unidade.model';
import { ICreateResidenciaDTO, ICreateResidenciaRepository } from '../../../repositories/unidade/residencia/create-residencia.repository';

export interface ICreateResidenciaService {
  handle(data: ICreateResidenciaDTO): Promise<Residencia>;
}

export class CreateResidenciaService implements ICreateResidenciaService {
  constructor(
    private readonly createResidenciaRepository: ICreateResidenciaRepository,
  ) {}

  async handle(data: ICreateResidenciaDTO): Promise<Residencia> {
    const residencia = await this.createResidenciaRepository.handle(data);

    return residencia;
  }
}
