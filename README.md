# Teste FrontEnd Angular com JWT

Este projeto demonstra uma aplicação Angular focada em autenticação com JSON Web Token (JWT). O objetivo é disponibilizar:

- Tela de login com geração de token.
- Dashboard com gráfico utilizando PrimeNG.
- Listagem de usuários protegida por `AuthGuard`.

## Pré-requisitos

- **Node.js** versão 18 ou superior.
- **NPM** (ou Yarn) para gerenciamento de pacotes.
- **Angular CLI** instalado globalmente ou via `npx`.
- API local simulada via `json-server`.

## Instalação

```bash
git clone <url>
cd <projeto>
npm install
```

## Execução em Desenvolvimento

```bash
npm start
```

A aplicação abre em `http://localhost:4200`.

## Ambientes e Configurações

Os arquivos `src/environments/environment.ts` e `environment.prod.ts` armazenam URLs da API e outras variáveis. Edite `apiBase` conforme necessário para apontar para sua API.

## Build para Produção

```bash
npm run build
```

Os arquivos serão gerados em `dist/jwt-auth-angular`. É possível hospedar em serviços como Firebase Hosting ou Netlify.

## Testes Unitários

```bash
npm test
```

O relatório de cobertura fica em `coverage/`. Recomenda-se cobertura mínima de 80%.

## Testes E2E

Os testes end-to-end utilizam Cypress.

```bash
npm run e2e
```

## Lint e Formatação

```bash
npm run lint
npm run format
```

Utilizamos ESLint integrado ao Angular e Prettier para padronizar o código.

## Estrutura do Projeto

```
src/
  app/
    core/           # serviços de autenticação, interceptors e guards
    shared/         # componentes reutilizáveis (header, footer, breadcrumbs)
    modules/
      auth/
      home/
      users/
  assets/
  environments/
```

- **auth** – módulo de autenticação e rota de login.
- **home** – dashboard com gráfico.
- **users** – listagem de usuários.

## Fluxo de Autenticação

`AuthService` realiza o login e armazena o token JWT no `localStorage`. `TokenInterceptor` anexa o token às requisições e o `AuthGuard` bloqueia rotas não autenticadas.

## Componentes Principais

- **Login** – formulário de autenticação.
- **Dashboard** – gráfico PrimeNG.
- **Listagem de Usuários** – tabela protegida.
- **Header**, **Footer** e **Breadcrumbs** para navegação.

## Melhorias e Boas Práticas

- Lazy loading de módulos.
- `ChangeDetectionStrategy.OnPush` nos componentes de apresentação.
- UI construída com PrimeNG e PrimeFlex.

## Mock de Dados

Inicie o servidor de mock para disponibilizar `/auth/login` e `/users`:

```bash
json-server --watch db.json --port 3000
```

Ou simplesmente execute:

```bash
npm run start:mock
```

## Contribuindo

1. Abra uma issue descrevendo a melhoria ou correção.
2. Crie uma branch `feature/<nome>` ou `bugfix/<nome>`.
3. Envie um Pull Request para revisão.

## Licença

MIT

## Contatos

Em caso de dúvidas, envie um email para gustavo@example.com.
