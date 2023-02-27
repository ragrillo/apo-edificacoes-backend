import IEndereco from '../interfaces/endereco.interface';
import { EdificacaoType } from './usuario.model';

interface UnidadeModel {
  id: string;
  proprietario: string;
  empresa: string;
  nome: string;
  telefone: string;
  responsavel: string;
  endereco: IEndereco;
  edificacao: EdificacaoType;
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
    endereco: IEndereco;
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

interface EscolaDTO extends Omit<EscolaModel, 'id'> { }

interface UBSDTO extends Omit<UBSModel, 'id'> { }

interface ResidenciaDTO extends Omit<ResidenciaModel, 'id'> { }

export { EscolaModel, UBSModel, ResidenciaModel, EscolaDTO, UBSDTO, ResidenciaDTO };
