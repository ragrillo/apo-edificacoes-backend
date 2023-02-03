type Edificacao = 'Escola' | 'UBS' | 'Residência';
type Status = 'Pendente' | 'Ativado' | 'Desativado';

export interface Usuario {
  id: string;
  cargo: number;
  edificacao: Edificacao;
  nomeCompleto: string;
  telefone: string;
  email: string;
  senha: string;
  cnpj?: string;
  razaoSocial?: string;
  emailEmpresarial?: string;
  telefoneEmpresarial?: string;
  status: Status;
}
