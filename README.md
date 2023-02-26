# APO Edificações | Documentação de API

## Endpoints

Base URL:
```
http://localhost:3000/api/v1
```

### Unidade

#### Escola

Cadastrar uma nova escola:
```
POST /unidades/escolas
```

Resposta
- 201 | Não possui retorno

Obter lista de escolas cadastradas:
```
GET /unidades/escolas
```

Resposta:
- 200 | Retorna uma lista de escolas cadastradas

Obter uma escola pelo ID:
```
GET /unidades/escolas/:id
```

Resposta:
- 200 | Retorna uma escola

Atualizar uma escola pelo ID:
```
PUT /unidades/escolas/:id
```

Resposta:
- 204 | Não possui retorno

Remover uma escola pelo ID:
```
DELETE /unidades/escolas/:id
```

Resposta:
- 204 | Não possui retorno

### Residência

Cadastrar uma nova residência:
```
POST /unidades/residencias
```

Resposta
- 201 | Não possui retorno

Obter lista de residências cadastradas:
```
GET /unidades/residencias
```

Resposta:
- 200 | Retorna uma lista de residências cadastradas

Obter uma residência pelo ID:
```
GET /unidades/residencias/:id
```

Resposta:
- 200 | Retorna uma residência

Atualizar uma residência pelo ID:
```
PUT /unidades/residencias/:id
```

Resposta:
- 204 | Não possui retorno

Remover uma residência pelo ID:
```
DELETE /unidades/residencias/:id
```

Resposta:
- 204 | Não possui retorno

### UBS

Cadastrar uma nova UBS:
```
POST /unidades/ubs
```

Resposta
- 201 | Não possui retorno

Obter lista de UBS cadastradas:
```
GET /unidades/ubs
```

Resposta:
- 200 | Retorna uma lista de UBS cadastradas

Obter uma UBS pelo ID:
```
GET /unidades/ubs/:id
```

Resposta:
- 200 | Retorna uma UBS

Atualizar uma UBS pelo ID:
```
PUT /unidades/ubs/:id
```

Resposta:
- 204 | Não possui retorno

Remover uma UBS pelo ID:
```
DELETE /unidades/ubs/:id
```

Resposta:
- 204 | Não possui retorno

### Ambiente

Cadastrar um novo ambiente:
```
POST /ambientes
```

Resposta:
- 201 | Não possui retorno

Obter lista de ambientes cadastrados:
```
GET /ambientes
```

Resposta:
- 200 | Retorna uma lista de ambientes cadastrados

Obter um ambiente pelo ID:
```
GET /ambientes/:id
```

Resposta:
- 200 | Retorna um ambiente

Atualizar um ambiente pelo ID:
```
PUT /ambientes/:id
```

Resposta:
- 204 | Não possui retorno

Remover um ambiente pelo ID:
```
DELETE /ambientes/:id
```

Resposta:
- 204 | Não possui retorno
