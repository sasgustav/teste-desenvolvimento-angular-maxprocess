# Teste FrontEnd Angular com JWT

Este repositório apresenta uma aplicação Angular simples voltada ao estudo de autenticação com JSON Web Token (JWT).

## Funcionalidades
- Tela de login que gera e armazena um token fictício.
- Dashboard com gráfico utilizando PrimeNG e Chart.js.
- Listagem de usuários protegida por `AuthGuard`.
- Componentes desacoplados para layout e páginas.

## Pré-requisitos
- **Node.js** 18 ou superior
- **NPM** (ou Yarn)
- **Angular CLI** instalado globalmente ou executado via `npx`
- **json-server** para simulação da API

## Instalação
```bash
git clone <url-do-repositório>
cd teste-desenvolvimento-angular-maxprocess
npm install
```

## Executando o projeto
Inicie a aplicação de desenvolvimento:
```bash
npm start
```
Acesse `http://localhost:4200` em seu navegador.

Para disponibilizar a API de mock em `http://localhost:3000`:
```bash
npm run start:mock
```
Os endpoints expostos são `POST /auth/login` e `GET /users`.

## Configuração de ambiente
As URLs da API ficam em `src/environments/environment*.ts`. Ajuste a propriedade `apiBase` conforme necessário.

## Build para produção
```bash
npm run build
```
Os arquivos finais são gerados em `dist/jwt-auth-angular`.

## Testes
### Unitários
```bash
npm test
```
O relatório de cobertura fica em `coverage/` e o ideal é ter ao menos 80% de cobertura.

### End-to-End
```bash
npm run e2e
```

## Lint e formatação
```bash
npm run lint
npm run format
```

## Estrutura
```
src/
  app/
    core/         # serviços, guards e interceptors
    shared/       # componentes reutilizáveis
    modules/
      auth/
      home/
      users/
  assets/
  environments/
```

## Contribuindo
1. Abra uma issue descrevendo a melhoria ou correção.
2. Crie uma branch `feature/<nome>` ou `bugfix/<nome>`.
3. Envie um Pull Request para revisão.

## Licença
MIT

## Contatos

- **Desenvolvedor:** Gustavo Vasconcelos
  [LinkedIn](https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/)
\n## Novas funcionalidades\n- Componentes desacoplados para Login, Header, Dashboard e Listagem de Usuários.
