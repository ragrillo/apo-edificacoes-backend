import { CreateResidenciaDTO, ICreateResidenciaRepository } from '../../repositories/unidade/create-residencia.repository';

export interface ICreateResidenciaService {
  create(data: CreateResidenciaDTO): Promise<void>;
}

export class CreateResidenciaService implements ICreateResidenciaService {
  constructor(private readonly createResidenciaRepository: ICreateResidenciaRepository) {}

  async create(data: CreateResidenciaDTO): Promise<void> {
    await this.createResidenciaRepository.create(data);
  }
}
