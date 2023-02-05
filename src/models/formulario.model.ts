type SimOuNao = 'Sim' | 'Não' | 'Não sei responder' | 'Não se aplica';
type ExceleteOuPessimo = 'Excelente' | 'Bom' | 'Regular' | 'Ruim' | 'Péssimo' | 'Não se aplica';

type Resposta = {
  criterio: string;
  pergunta: string;
  resposta: SimOuNao | ExceleteOuPessimo;
}

export interface Formulario {
  titulo: string;
  respostas: Resposta[];
}
