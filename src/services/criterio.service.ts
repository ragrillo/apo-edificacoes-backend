import { CriterioModel } from '../models/criterio.model';
import { ICriterioRepository } from '../repositories/criterio.repository';

interface ICriterioService {
  findAll(number: string): Promise<CriterioModel[]>;
}

class CriterioService implements ICriterioService {
  constructor(private readonly criterioRepository: ICriterioRepository) {}

  async findAll(number: string): Promise<CriterioModel[]> {
    const criterios = await this.criterioRepository.findAll(number);

    return criterios;
  }
}

export { CriterioService, ICriterioService };
