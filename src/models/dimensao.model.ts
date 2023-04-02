type DimensaoGrupoType = 'Ambiente' | 'Gestão e Projeto';

interface DimensaoModel {
    id: string;
    nome: string;
    numero: string;
    grupo: DimensaoGrupoType;
    respondido: boolean;
}

interface DimensaoModelDTO extends Omit<DimensaoModel, 'id'> {}

export { DimensaoModel, DimensaoModelDTO };
