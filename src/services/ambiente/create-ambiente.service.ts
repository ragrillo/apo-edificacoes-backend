import { Ambiente } from '../../models/ambiente.model';
import { CreateAmbienteDTO, ICreateAmbienteRepository } from '../../repositories/ambiente/create-ambiente.repository';

export interface ICreateAmbienteService {
  handle(data: CreateAmbienteDTO): Promise<Ambiente>;
}

export class CreateAmbienteService implements ICreateAmbienteService {
  constructor(
    private createAmbienteRepository: ICreateAmbienteRepository,
  ) { }

  async handle(data: CreateAmbienteDTO): Promise<Ambiente> {
    const ambiente = await this.createAmbienteRepository.handle(data);

    return ambiente;
  }
}
