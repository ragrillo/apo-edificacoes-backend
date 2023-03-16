type RespostaType = {
  codigo: string;
  resposta: string;
}

interface FormularioModel {
  id: string;
  ambiente: string;
  respostas: RespostaType[];
}

interface FormularioDTO extends Omit<FormularioModel, 'id'> { }

export { FormularioModel, FormularioDTO };
