import IEndereco from '../interfaces/endereco.interface';

interface EmpresaModel {
  id: string;
  cnpj: string;
  razaoSocial: string;
  endereco: IEndereco;
  telefone: string;
}

interface EmpresaDTO extends Omit<EmpresaModel, 'id'> { }

export { EmpresaModel, EmpresaDTO }
