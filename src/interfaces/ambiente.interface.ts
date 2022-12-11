type TipoAmbiente = 'Coberto' | 'Descoberto';

type TipoDimensioes = {
  largura: number;
  comprimento: number;
  peDireito: number;
}

type TipoArea = {
  largura: number;
  altura: number;
  instaladaNaFachada: boolean;
  areaVentilacao?: number;
  areaIluminacao?: number;
}

type TipoAreaAbertura = {
  portas: number;
  ventilacao: number;
  iluminacao: number;
}

interface IAmbiente {
  nomeAmbiente: string;
  grupoAmbiente: string;
  tipoAmbiente: TipoAmbiente;
  dimensoes: TipoDimensioes;
  areaAmbiente: number;
  janelas: TipoArea[];
  portas: TipoArea[];
  areaAbertura: TipoAreaAbertura;
  areaEsquadrias: number;
}

export default IAmbiente;
