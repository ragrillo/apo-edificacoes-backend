import IBaseService from './base.service';
import { IUBSRepository } from '../repositories/ubs.repository';
import { UBSDTO, UBSModel } from '../models/unidade.model';

interface IUBSService extends IBaseService<UBSModel, UBSDTO> {
  findByProprietarioId(id: string): Promise<UBSModel[]>;
}

class UBSService implements IUBSService {
  constructor(private readonly repository: IUBSRepository) {}

  async create(data: UBSDTO): Promise<void> {
    await this.repository.create(data);
  }

  async findAll(): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await this.repository.findAll();

    return ubs;
  }

  async findById(id: string): Promise<UBSModel> {
    const ubs: UBSModel = await this.repository.findById(id);

    return ubs;
  }

  async findByProprietarioId(id: string): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await this.repository.findByProprietarioId(id);

    return ubs;
  }

  async update(id: string, data: UBSDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }
}

export { IUBSService, UBSService };
