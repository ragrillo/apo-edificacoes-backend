import IEndereco from './endereco.interface';

type TipoHabitacaoType = 'Casa' | 'Apartamento';
type TipoEscolaType = 'Municipal' | 'Estadual' | 'Federal' | 'Particular';
type TipoUBSType = 'Porte I' | 'Porte II' | 'Porte III' | 'Porte IV' | 'Porte V';
type ModalidadeEscolaType = 'Infantil' | 'Fundamental' | 'Médio' | 'Jovens e Adultos';

interface IUBS {
  tipoUnidade: TipoUBSType;
  dataEntregaObra: String;
  descricao: String;
  construtora: {
    nome: String;
    telefone: String;
    endereco: IEndereco;
  };
}

interface IHabitacao {
  tipoUnidade: TipoHabitacaoType;
  tipoCasa: String[],
  numeroPavimentos: Number;
  blocosExistentes: Number;
  unidadesPorBloco: Number;
  totalUnidades: Number;
  nomeConstrutora: String;
  anoEntregaObra: Number;
  descricao: String;
}

interface IEscola {
  tipoEscola: TipoEscolaType;
  modalidadeEscola: ModalidadeEscolaType;
  quantidadeAlunos: Number;
}

interface IUnidade {
  nome: String;
  responsavel: String;
  telefone: String;
  horarioFuncionamento: String[];
  tipoUnidade: String;
  endereco: IEndereco;
  escola?: IEscola;
  habitacao?: IHabitacao;
  ubs?: IUBS;
}

export { IUnidade, IEscola, IHabitacao, IUBS, IEndereco };
