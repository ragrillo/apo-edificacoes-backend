interface IBaseService<T> {
  findAll(): Promise<T[]>;
}

export default IBaseService;
