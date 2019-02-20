# Challenger Full Stack - Sizebay
Por conta do tempo, como conversado, não consegui finalizar todo o desafio, foi feito a API e Apenas a estrutura de Context e Providers do Front-end, não comnsegui escrever nem um componente visual.

Não foi feito controle de sessão na API, foi modelado o usuário no Mongo mas priorizei as funcionalidades.

## Execução
Antes da execução do projeto, devem ser instaladas as dependências, certifique-se de ter o `Node-v6` ou superior e instalar o gerenciador de dependencias `Yarn-v1.7+` e execute o seguinte comendo:
`yarn install && yarn --cwd client install`
Para executar o projeto abra 2 terminais e execute os comandos abaixo na raiz do repositório.
Terminal 1 - API `# yarn && yarn start`
Terminal 2 - API `# yarn --cwd client install && yarn --cwd client start`

# API
O base URL da API é formado pelo domínio do servidor e a aporta definida no arquivo `.env` acompanhados de `/api` - `[yourDomain]:[port]/api`.

Ex: `localhost:3030/api`- Executando em localhost(Desenvolvimento)

## Recursos
Os principais recursos suportados pela API são:

- Employee
- Review

| recurso | descrição |
|: -------------- |: -------------------------------- - |
| `/employee` | retorna uma lista de os empregados cadastrados.|
| `/review` | retorna uma lista de todas as revisões, respondidas ou não.|


### Employee
| recurso | descrição |
|: ---------------------------- |: ------------------ ---------------- |
| `GET:/employee/{id}` | Retorna o empregado correspondente ao ID do parâmetro. |
| `GET:/employee/{pis}/pis` | Retorna  empregado correspondente aquele PIS, no caso do início da sessão do Empregado. |
| `POST:/employee` | Cria um novo empregado. |
| `PUT:/employee/{id}` | Atualiza o empregado com o ID informado com as informações enviadas no Body-JSON. |
| `DELETE:/employee/{id}` | Remove um empregado correspondente ao ID informado. |

### Scheme
```
{
    _id:"hkaf78sd328",
    "name":"John Due",
    "pis": "188399192"
}
```

### Employee
| recurso | descrição |
|: ---------------------------- |: ------------------ ---------------- |
| `GET:/employee/{id}` | Retorna o empregado correspondente ao ID do parâmetro. |
| `GET:/employee/{pis}/pis` | Retorna  empregado correspondente aquele PIS, no caso do início da sessão do Empregado. |
| `POST:/employee` | Cria um novo empregado. |
| `PUT:/employee/{id}` | Atualiza o empregado com o ID informado com as informações enviadas no Body-JSON. |
| `DELETE:/employee/{id}` | Remove um empregado correspondente ao ID informado. |

### Scheme
```
{
    response: 'Response of employee',
    from: {
        _id: "hkaf78sd328",
        "name":"John Due",
        "pis": "188399192"
    },
    to: {
        _id: "8fdsn89ana",
        "name":"Charles Bray",
        "pis": "34712897"
    },
    responsedAt: "2019-02-20T22:38:26.391Z",
    assignmentDate: "2019-02-20T08:38:26.391Z",
    status: "finish" `ENUN['pending', 'finish']`
}
```


## RESUMO
O banco utilizado foi o MongoDB, apesar de feita a modelagem do usuário, não foi documentada pois não possui nem um endpoint para sua comunicação, como também a ausencia do Middleware de Autenticação.