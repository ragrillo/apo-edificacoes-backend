interface ISubcriterio {
  nome: string;
  link: string;
  respondido: boolean;
}

interface ICriterio {
  nome: string;
  subcriterio: ISubcriterio[];
}

export { ICriterio, ISubcriterio };
