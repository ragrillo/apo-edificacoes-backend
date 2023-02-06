import { UBS } from '../../../models/unidade.model';
import { CreateUBSDTO, ICreateUBSRepository } from '../../../repositories/unidade/ubs/create-ubs.repository';

export interface ICreateUBSService {
  handle(data: CreateUBSDTO): Promise<UBS>;
}

export class CreateUBSService implements ICreateUBSService {
  constructor (private readonly createUBSRepository: ICreateUBSRepository) {}

  async handle(data: CreateUBSDTO): Promise<UBS> {
    const UBS = await this.createUBSRepository.handle(data);
    return UBS;
  }
}
