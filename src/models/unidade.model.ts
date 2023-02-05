import { Endereco } from '../interfaces/endereco.interface';
import { Edificacao } from './usuario.model';

interface Unidade {
  nome: string;
  telefone: string;
  responsavel: string;
  endereco: Endereco;
  edificacao: Edificacao;
  horarioFuncionamento: string[];
}

interface Escola extends Unidade {
  tipoEscola: string;
  modalidadeEscola: string;
  quantidadeAlunos: number;
}

interface UBS extends Unidade {
  descricao: string;
  tipoUnidade: string;
  dataEntregaObra: string;
  construtora: {
    nome: string;
    telefone: string;
    endereco: Endereco;
  };
}

interface Residencia extends Unidade {
  tipoCasa: string;
  descricao: string;
  tipoUnidade: string;
  anoEntregaObra: string;
  nomeConstrutora: string;
  numPavimentos: number;
  numTotalUnidades: number;
  numBlocosExistentes: number;
  numUnidadesPorBloco: number;
}

export { Escola, UBS, Residencia };
