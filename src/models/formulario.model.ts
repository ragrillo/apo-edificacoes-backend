type SimOuNao = 'Sim' | 'Não' | 'Não sei responder' | 'Não se aplica';
type ExceleteOuPessimo = 'Excelente' | 'Bom' | 'Regular' | 'Ruim' | 'Péssimo' | 'Não se aplica';

type RespostaType = {
  criterio: string;
  pergunta: string;
  resposta: SimOuNao | ExceleteOuPessimo;
}

interface FormularioModel {
  id: string;
  titulo: string;
  numero: string;
  respostas: RespostaType[];
}

interface FormularioDTO extends Omit<FormularioModel, 'id'> { }

export { FormularioModel, FormularioDTO };
