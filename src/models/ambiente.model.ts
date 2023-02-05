export type Cobertura = 'Coberto' | 'Descoberto';

type Dimensoes = {
  largura: number;
  comprimento: number;
  peDireito: number; 
}

type Area = {
  largura: number;
  altura: number;
  instaladaNaFachada: boolean;
  areaVentilacao: number;
  areaIluminacao: number;
}

export interface Ambiente {
  nome: string;
  grupo: string;
  cobertura: Cobertura;
  dimensoes: Dimensoes;
  areaAmbiente: number;
  areaEsquadrias: number;
  janelas: Area[];
  portas: Area[];
}
