type BuildingType = 'UBS' | 'Escola' | 'Residência';

interface IEmpresa {
  nome: string;
  responsavel: string;
  cnpj: string;
  telefone: string;
  email: string;
  senha: string;
  edificacoes: BuildingType;
}

export default IEmpresa;
