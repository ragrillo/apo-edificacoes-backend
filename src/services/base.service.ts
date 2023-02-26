interface IBaseService<T, D> {
  create(data: D): Promise<void>;
  findAll(): Promise<T[]>;
}

export default IBaseService;
