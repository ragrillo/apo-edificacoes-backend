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

interface AmbienteModel {
  id: string;
  unidade: string;
  nome: string;
  grupo: string;
  cobertura: Cobertura;
  dimensoes: Dimensoes;
  areaAmbiente: number;
  areaEsquadrias: number;
  janelas: Area[];
  portas: Area[];
}

interface AmbienteDTO extends Omit<AmbienteModel, 'id'> {}

export { AmbienteModel, AmbienteDTO };
