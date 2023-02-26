import IBaseService from './base.service';
import { IUBSRepository } from '../repositories/ubs.repository';
import { UBSModel } from '../models/unidade.model';

interface IUBSService extends IBaseService<UBSModel> {}

class UBSService implements IUBSService {
  constructor(private readonly repository: IUBSRepository) {}

  async findAll(): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await this.repository.findAll();

    return ubs;
  }
}

export { IUBSService, UBSService };
