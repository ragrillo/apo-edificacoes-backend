interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
}

export default IBaseRepository;
