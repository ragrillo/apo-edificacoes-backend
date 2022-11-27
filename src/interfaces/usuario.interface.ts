type CargoType = 'Administrador do site ou Equipe de TI' | 'Engenheiro Civil ou Arquiteto' | 'Coordenador da Unidade' | 'Diretor do departamento ou Administrador da empresa' | 'Sócio proprietário; Empreendedor; Chefe da Secretaria ou Prefeitura';
type EdificacaoType = 'UBS' | 'Escola' | 'Residência';
type StatusType = 'Pendente' | 'Ativado' | 'Desativado';

interface IUsuario {
  cargo: CargoType;
  edificacao: EdificacaoType;
  nomeCompleto: string;
  telefone: string;
  email: string;
  senha: string;
  cnpj?: string;
  razaoSocial?: string;
  telefoneEmpresarial?: string;
  emailEmpresarial?: string;
  status: StatusType;
}

export default IUsuario;
