interface UsuarioModel {
  id: string;
  cargo: CargoType;
  edificacao?: EdificacaoType;
  nomeCompleto: string;
  telefone: string;
  email: string;
  senha: string;
  status: StatusType;
  empresa?: string;
}

interface UsuarioDTO extends Omit<UsuarioModel, 'id'> { }

type CargoType = 1 | 2 | 3 | 4 | 5;

type EdificacaoType = 'Escola' | 'UBS' | 'Residência';

type StatusType = 'Pendente' | 'Ativado' | 'Desativado';

export { UsuarioModel, UsuarioDTO, EdificacaoType, CargoType }
