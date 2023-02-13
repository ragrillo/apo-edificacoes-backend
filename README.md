# APO Edificações API | Documentação
Este documento tem como objetivo documentar o funcionamento da API APO Edificações.

## Base URL
```
http://localhost:3000/api/v1
```

# Usuário

## ENTIDADE

```json
{
  "id": "string",
  "cargo": 0,
  "edificacao": "string",                   // Escola | UBS | Residência
  "nomeCompleto": "string",
  "telefone": "string",
  "email": "string",
  "senha": "string",
  "cnpj": "string",
  "razaoSocial": "string",
  "emailEmpresarial": "string",
  "telefoneEmpresarial": "string",
  "status": "string"                        // Pendente | Ativado | Desativado
}
```

## ENDPOINTS
### Cadastrar um novo Usuário
```
POST /usuarios
```

REQUEST

Body:
```json
{
  "cargo": 0,
  "edificacao": "string",                   // Escola | UBS | Residência
  "nomeCompleto": "string",
  "telefone": "string",
  "email": "string",
  "senha": "string",
}
```

RESPONSE

201 | CREATED
```json
{
  "statusCode": 201,
  "body": "Cadastro realizado com sucesso! Aguarde a aprovação do administrador."
}
```

500 | INTERNAL SERVER ERROR
```json
{
  "statusCode": 500,
  "body": "Erro interno do servidor."
}

```

**RESPONSE**

201 | CREATED
```json
{
  "statusCode": 201,
  "body": "Cadastro realizado com sucesso! Aguarde a aprovação do administrador."
}
```

500 | INTERNAL SERVER ERROR
```json
{
  "statusCode": 500,
  "body": "Erro interno do servidor."
}
```

# Unidade

## ENTIDADE | Escola

```json
{
  "id": "string",
  "nome": "string",
  "telefone": "string",
  "responsavel": "string",
  "endereco": {
    "logradouro": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "string",
  },
  "edificacao": "string",                   // Escola | UBS | Residência
  "horarioFuncionamento": ["string"],
  "tipoEscola": "string",
  "modalidadeEscola": "string",
  "quantidadeAlunos": 0,
}
```

## ENTIDADE | UBS

```json
{
  "id": "string",
  "nome": "string",
  "telefone": "string",
  "responsavel": "string",
  "endereco": {
    "logradouro": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "string",
  },
  "edificacao": "string",                   // Escola | UBS | Residência
  "horarioFuncionamento": ["string"],
  "descricao": "string",
  "tipoUnidade": "string",
  "dataEntregaObra": "string",
  "construtora": {
    "nome": "string",
    "telefone": "string",
    "endereco": {
      "logradouro": "string",
      "numero": "string",
      "bairro": "string",
      "cidade": "string",
      "estado": "string",
    }
  }
}
```

## ENTIDADE | Residência

```json
{
  "id": "string",
  "nome": "string",
  "telefone": "string",
  "responsavel": "string",
  "endereco": {
    "logradouro": "string",
    "numero": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "string",
  },
  "edificacao": "string",                   // Escola | UBS | Residência
  "horarioFuncionamento": ["string"],
}
```

# Ambiente

## Entidade

```json
{
  "id": "string",
  "nome": "string",
  "grupo": "string",
  "cobertura": "string",                    // Coberto | Descoberto
  "dimensoes": {
    "largura": 0,
    "comprimento": 0,
    "peDireito": 0,
  },
  "areaAmbiente": 0,
  "areaEsquadrias": 0,
  "janelas": [
    {
      "largura": 0,
      "altura": 0,
      "instaladaNaFachada": false,
      "areaVentilacao": 0,
      "areaIluminacao": 0,
    }
  ],
  "portas": [
    {
      "largura": 0,
      "altura": 0,
      "instaladaNaFachada": false,
      "areaVentilacao": 0,
      "areaIluminacao": 0,
    }
  ],
}
```

# Formulario

## Entidade

```json
{
  "id": "string",
  "titulo": "string",
  "numero": "string",
  "respostas": [
    {
      "criterio": "string",
      "pergunta": "string",
      "resposta": "string",     // Sim | Não | Não sei responder | Não se aplica | Excelente | Bom | Regular | Ruim | Péssimo
    }
  ]
}
```
