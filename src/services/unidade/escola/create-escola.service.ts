import { Escola } from '../../../models/unidade.model';
import { CreateEscolaDTO, ICreateEscolaRepository } from '../../../repositories/unidade/escola/create-escola.repository';

export interface ICreateEscolaService {
  handle(data: CreateEscolaDTO): Promise<Escola>;
}

export class CreateEscolaService implements ICreateEscolaService {
  constructor (private readonly createEscolaRepository: ICreateEscolaRepository) {}

  async handle(data: CreateEscolaDTO): Promise<Escola> {
    const escola = await this.createEscolaRepository.handle(data);
    return escola;
  }
}
