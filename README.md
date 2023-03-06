# APO Edificações | Documentação de API

## Endpoints

Base URL:
```
http://localhost:3000/api/v1
```

### Usuário

Cadastrar um novo usuário:
```
POST /usuarios
```

Resposta:
- 201 | Retorna uma mensagem de sucesso

Obter lista de usuários cadastrados:
```
GET /usuarios
```

Resposta:
- 200 | Retorna uma lista de usuários cadastrados

Obter um usuário pelo ID:
```
GET /usuarios/:id
```

Resposta:
- 200 | Retorna um usuário

Atualizar um usuário pelo ID:
```
PUT /usuarios/:id
```

Resposta:
- 204 | Não possui retorno

Remover um usuário pelo ID:
```
DELETE /usuarios/:id
```

Resposta:
- 204 | Não possui retorno

Realizar login:
```
POST /usuarios/login
```

Resposta:
- 200 | Retorna um token JWT

### Empresa

Cadastrar uma nova empresa:
```
POST /empresas
```

Resposta:
- 201 | Não possui retorno

Obter lista de empresas cadastradas:
```
GET /empresas
```

Resposta:
- 200 | Retorna uma lista de empresas cadastradas

Obter uma empresa pelo ID:
```
GET /empresas/:id
```

Resposta:
- 200 | Retorna uma empresa

Atualizar uma empresa pelo ID:
```
PUT /empresas/:id
```

Resposta:
- 204 | Não possui retorno

Remover uma empresa pelo ID:
```
DELETE /empresas/:id
```

Resposta:
- 204 | Não possui retorno

### Unidade | Escola

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

Obter uma escola pelo ID do proprietário:
```
/escolas/proprietario/:id
```

Resposta:
- 200 | Retorna uma lista de escolas cadastradas pelo proprietário

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

### Unidade | Residência

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

Obter uma residência pelo ID do proprietário:
```
/residencias/proprietario/:id
```

Resposta:
- 200 | Retorna uma lista de residências cadastradas pelo proprietário

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

### Unidade | UBS

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

Obter uma UBS pelo ID do proprietário:
```
/ubs/proprietario/:id
```

Resposta:
- 200 | Retorna uma lista de UBS cadastradas pelo proprietário

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
