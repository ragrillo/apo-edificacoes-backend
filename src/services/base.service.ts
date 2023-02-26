interface IBaseService<T, D> {
  create(data: D): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  remove(id: string): Promise<void>;
}

export default IBaseService;
