# COLMEIA_TESTE

Teste Técnico para a Colmeia. Cenários de teste automatizados que validam as funcionalidades e evidenciam possíveis falhas da aplicação [teste-colmeia-qa.colmeia-corp.com](https://teste-colmeia-qa.colmeia-corp.com).

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [Mochawesome](https://github.com/adamgruber/mochawesome) — gerador de relatórios HTML

## Pré-requisitos

- Node.js instalado
- Cypress instalado globalmente ou via `node_modules`

## Instalação

```bash
npm install
```

## Como Executar os Testes

**Modo headless (linha de comando):**
```bash
npx cypress run
```

**Modo interativo (interface gráfica):**
```bash
npx cypress open
```

Os relatórios são gerados automaticamente em `cypress/reports/` no formato HTML e JSON.

---

## Cenários de Teste

### Autenticação

| Arquivo | Cenário | Resultado Esperado |
|---|---|---|
| `teste-de-login.cy.js` | Login com credenciais válidas | Exibe mensagem "Login realizado com sucesso" e botão "Continuar" |
| `teste-de-login-errado.cy.js` | Login com e-mail inválido | Exibe mensagem de erro "Usuário ou senha inválidos" |
| `teste-de-senha-errada.cy.js` | Login com senha inválida | Exibe mensagem de erro "Usuário ou senha inválidos" |
| `teste-de-esqueceu-senha.cy.js` | Recuperação de senha | Redireciona para a página `/forgot-password` |

### Navegação

| Arquivo | Cenário | Resultado Esperado |
|---|---|---|
| `teste-do-botao-Banco.cy.js` | Botão de acesso ao Banco de Dados | Navega para `/dashboard/campanha/bancos-de-dados` e exibe o título "Bancos de dados" |
| `teste-do-botao-forms.cy.js` | Botão de acesso ao Colmeia Forms | Navega para `/dashboard/campanha/colmeia-forms` e exibe o título "Colmeia Forms" |
| `teste-do-botao-candidato.cy.js` | Elemento "candidato" no menu | Verifica se o elemento é um botão (`<button>`) — **bug identificado** |

### Bancos de Dados (CRUD)

| Arquivo | Cenário | Resultado Esperado |
|---|---|---|
| `teste-cadastro-de-items.cy.js` | Cadastro de itens | Adiciona todos os itens definidos em `cypress/fixtures/itens.json` |
| `teste-deletar-de-items.cy.js` | Exclusão de item | Deleta o primeiro item e confirma que ele não existe mais na tabela |
| `teste-arquivar-de-items.cy.js` | Arquivamento de item | Arquiva o primeiro item e confirma que ele aparece na lista de arquivados |

---

## Bugs Identificados

- **`teste-do-botao-candidato.cy.js`** — O elemento que contém o texto "candidato" no menu não é um `<button>`, violando boas práticas de acessibilidade e comportamento esperado para elementos interativos.
- **`teste-de-esqueceu-senha.cy.js`** — O fluxo de recuperação de senha não foi concluído conforme esperado (falha registrada em screenshot).
- **`teste-de-login.cy.js`** — O redirecionamento pós-login apresentou falha (falha registrada em screenshot).
- **`teste-do-botao-forms.cy.js`** — A navegação para o Colmeia Forms apresentou falha (falha registrada em screenshot).
- **`teste-arquivar-de-items.cy.js`** — O fluxo de arquivamento de itens apresentou falha (falha registrada em screenshot).

---

## Estrutura do Projeto

```
cypress/
├── e2e/                  # Arquivos de teste
├── fixtures/
│   └── itens.json        # Dados utilizados nos testes de CRUD
├── reports/              # Relatórios Mochawesome gerados
├── screenshots/          # Capturas de tela de falhas
├── videos/               # Gravações das execuções
└── support/
    ├── commands.js       # Comandos customizados (cy.login, cy.bancosDeDados, cy.addItem)
    └── e2e.js
```

## Comandos Customizados

- `cy.login(email, senha)` — realiza o login na aplicação
- `cy.bancosDeDados()` — navega até a página de Bancos de Dados
- `cy.addItem()` — adiciona os itens do fixture à lista de Bancos de Dados
