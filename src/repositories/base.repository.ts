interface IBaseRepository<T, D> {
  create(data: D): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
}

export default IBaseRepository;
