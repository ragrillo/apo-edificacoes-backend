interface CriterioModel {
  id: string;
  codigo: string;
  enunciado: string;
  categoria: string;
  opcoesResposta: string[];
  dica?: string;
}

interface CriterioDTO extends Omit<CriterioModel, 'id'> { }

export { CriterioModel, CriterioDTO };
