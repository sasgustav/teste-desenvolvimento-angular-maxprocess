# Teste FrontEnd Angular com JWT

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.x-brightgreen.svg)](https://nodejs.org/)
[![Angular CLI](https://img.shields.io/badge/Angular%20CLI-%5E15.x-red.svg)](https://angular.io/cli)
[![Coverage Status](https://img.shields.io/badge/coverage-%3E%3D80%25-green.svg)](#testes)

Este repositório apresenta uma aplicação Angular simples focada em estudos de **autenticação** com JSON Web Token (JWT). Você encontrará exemplos práticos de uso de `AuthGuard`, interceptors, estrutura de módulos e outros pontos cruciais de um projeto front-end Angular com foco em **arquitetura escalável** e **boas práticas**.

## Sumário

- [Teste FrontEnd Angular com JWT](#teste-frontend-angular-com-jwt)
  - [Sumário](#sumário)
  - [Visão Geral](#visão-geral)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Execução](#execução)
    - [Ambiente de Mock](#ambiente-de-mock)
      - [Endpoints disponíveis](#endpoints-disponíveis)
    - [Configurações de Ambiente](#configurações-de-ambiente)
    - [Credenciais de Acesso (Mock Login)](#credenciais-de-acesso-mock-login)
  - [Build para Produção](#build-para-produção)
  - [Testes](#testes)
    - [Unitários](#unitários)
    - [End-to-End](#end-to-end)
  - [Lint e Formatação](#lint-e-formatação)
  - [Estrutura de Pastas](#estrutura-de-pastas)
  - [Contribuindo](#contribuindo)
  - [Licença](#licença)
  - [Contato](#contato)

---

## Visão Geral

Este projeto é um **teste de desenvolvimento** para demonstrar:

1. **Autenticação** via JWT (processo de login, interceptação de requisições e proteção de rotas).
2. **Integração** com bibliotecas de terceiros (PrimeNG e Chart.js).
3. **Arquitetura modular** (organização de pastas e módulos).
4. **Estrutura** de um projeto escalável em Angular, incluindo `AuthGuard`, interceptors e serviços.

A **Dashboard** apresenta um gráfico simples para ilustrar como podemos integrar bibliotecas de charting e destacar informações relevantes ao usuário.

---

## Tecnologias Utilizadas

* **Angular** (CLI e framework)
* **TypeScript**
* **PrimeNG** + **Chart.js** para visualização de dados
* **json-server** para simular API
* **Jasmine** + **Karma** para testes unitários
* **Protractor** (ou Cypress, caso adapte) para testes E2E

---

## Funcionalidades

* **Tela de Login**: gera e armazena localmente um token **fictício** (simulando um token JWT válido).
* **Dashboard**: exibe um **gráfico** usando PrimeNG e Chart.js.
* **Listagem de Usuários**: rota protegida pelo `AuthGuard`, acessível apenas para usuários logados.
* **Estrutura de Layout Desacoplada**: gerenciamento de layout centralizado, facilitando a manutenção e expansão.
* **Interceptores**: para injeção do token em requisições (pode ser adaptado para ambientes reais).


## Pré-requisitos

* **Node.js** 18 ou superior
* **NPM** (ou Yarn)
* **Angular CLI** (instalado globalmente ou execução via `npx`)
* **json-server** para simular a API localmente

Caso não tenha o Angular CLI e o json-server instalados globalmente, instale-os com:

```bash
npm install -g @angular/cli json-server
````

*ou use o `npx` sempre que precisar.*

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositório>
cd teste-desenvolvimento-angular-maxprocess
npm install
```

## Execução

Para iniciar o projeto em **modo de desenvolvimento**, basta:

```bash
npm start
```

O projeto estará disponível em:

> **[http://localhost:4200](http://localhost:4200)**

### Ambiente de Mock

Para simular a API local (mock), abra outro terminal e execute:

```bash
npm run start:mock
```

A API fictícia ficará disponível em:

> **[http://localhost:3000](http://localhost:3000)**

#### Endpoints disponíveis

* `POST /auth/login`
* `GET /users`

### Configurações de Ambiente

As URLs da API estão definidas em:

```
src/environments/environment*.ts
```

Ajuste a propriedade `apiBase` conforme seu ambiente (desenvolvimento, produção, etc.).

### Credenciais de Acesso (Mock Login)

Para autenticar-se na aplicação durante os testes, utilize as seguintes credenciais predefinidas no mock server (`json-server`):

```
Usuário: demo-gustavo@gmail.com
Senha: 123456
```

Essas credenciais são validadas pelo endpoint `POST /auth/login`, que retorna um token fictício (`fake-jwt-token`) em caso de sucesso.

Caso deseje personalizar essas credenciais, edite o seguinte trecho no script de mock:

```js
if (username === 'demo-gustavo@gmail.com' && password === '123456') {
  return res.json({ token: 'fake-jwt-token' });
}
```

## Build para Produção

Para gerar uma versão de produção, execute:

```bash
npm run build
```

Os arquivos otimizados serão gerados em:

```
dist/jwt-auth-angular
```

## Testes

### Unitários

Execute os testes de unidade com:

```bash
npm test
```

Ao final, será gerado um relatório de cobertura em:

```
coverage/
```

A recomendação é manter **pelo menos 80%** de cobertura.

### End-to-End

Rode os testes E2E para validar o fluxo completo da aplicação:

```bash
npm run e2e
```

*Observação*: Certifique-se de que a aplicação esteja rodando em `http://localhost:4200` antes de iniciar o teste E2E.

## Lint e Formatação

Para garantir um código padronizado e sem problemas de estilo, utilize:

```bash
npm run lint
npm run format
```

O `lint` fará a análise estática do código, enquanto o `format` aplicará a formatação de acordo com as regras estabelecidas (Prettier, etc.).

## Estrutura de Pastas

A organização do projeto segue uma convenção que facilita a escalabilidade:

```
src/
  app/
    core/             # Serviços, guards e interceptors
    shared/           # Componentes e diretivas reutilizáveis
    modules/          # Módulos específicos da aplicação
      auth/           # Tela de login e lógica de autenticação
      home/           # Dashboard e páginas principais
      users/          # Tela de listagem e manipulação de usuários
  assets/             # Imagens, ícones e arquivos estáticos
  environments/       # Configurações por ambiente (dev, prod, etc.)
```

## Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Abra uma **issue** descrevendo a melhoria ou correção desejada.
2. Crie uma nova branch a partir da `main` seguindo a convenção:

   * `feature/<nome>` para novas funcionalidades.
   * `bugfix/<nome>` para correções de bugs.
3. Envie um **Pull Request** para revisão e aprovação.

## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).

## Contato

Desenvolvido com dedicação por **Gustavo Vasconcelos** — Tech Lead e Especialista em Front-End.

Se você tiver dúvidas, sugestões, propostas de melhoria ou quiser trocar ideias sobre Angular, arquitetura de software ou desenvolvimento web, sinta-se à vontade para entrar em contato:

- 🌐 [**LinkedIn** – Conecte-se comigo](https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/)

Fique à vontade para **abrir issues**, contribuir com melhorias ou dar um ⭐ no repositório.
Obrigado por visitar e bom desenvolvimento!
