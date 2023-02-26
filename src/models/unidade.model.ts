import { ObjectId } from 'mongodb';
import { Edificacao } from './usuario.model';

interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface UnidadeModel {
  id: string;
  proprietario: ObjectId;
  nome: string;
  telefone: string;
  responsavel: string;
  endereco: Endereco;
  edificacao: Edificacao;
  horarioFuncionamento: string[];
}

interface EscolaModel extends UnidadeModel {
  tipoEscola: string;
  modalidadeEscola: string;
  quantidadeAlunos: number;
}

interface UBSModel extends UnidadeModel {
  descricao: string;
  tipoUnidade: string;
  dataEntregaObra: string;
  construtora: {
    nome: string;
    telefone: string;
    endereco: Endereco;
  };
}

interface ResidenciaModel extends UnidadeModel {
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

export { EscolaModel, UBSModel, ResidenciaModel };
