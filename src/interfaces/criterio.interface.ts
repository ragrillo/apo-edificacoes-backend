type GrupoType = 'ambiente' | 'projeto' | 'gestao' | 'aspectos-gerais';

interface ICriterio {
  titulo: string;
  subtitulo: string;
  endpoint: string;
  grupo: GrupoType;
  respondido: boolean;
}

export { ICriterio };
