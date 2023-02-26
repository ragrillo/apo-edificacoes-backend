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
