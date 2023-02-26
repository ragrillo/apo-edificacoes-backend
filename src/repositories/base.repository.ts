interface IBaseRepository<T, D> {
  create(data: D): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(id: string, data: D): Promise<void>;
  remove(id: string): Promise<void>;
}

export default IBaseRepository;
