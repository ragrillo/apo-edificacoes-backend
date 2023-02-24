import { Escola } from '../../models/unidade.model';
import { IFindUnidadesByIdRepository } from '../../repositories/unidade/find-unidades-by-id.repository';

export interface IFindUnidadesByIdService {
  findEscolas(id: string): Promise<Escola[]>
}

export class FindUnidadesByIdService implements IFindUnidadesByIdService {
  constructor(private readonly findUnidadesByIdRepository: IFindUnidadesByIdRepository) {}

  async findEscolas(id: string): Promise<Escola[]> {
    const escolas: Escola[] = await this.findUnidadesByIdRepository.findEscolas(id);

    return escolas;
  }
}
