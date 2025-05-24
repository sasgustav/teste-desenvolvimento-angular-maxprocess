# Angular JWT Example

Este projeto demonstra uma aplicação Angular 16 com autenticação via JWT e organização modular. As rotas de `home` e `users` são protegidas por um `AuthGuard` e os módulos são carregados sob demanda (lazy loading).

Desenvolvido por **Gustavo Vasconcelos**.

## Como executar

```bash
npm install
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

## Estrutura e Arquitetura

- **core**: serviços, interceptors e guardas utilizados em toda a aplicação.
- **modules**: `auth`, `home` e `users`, cada um com seu roteamento próprio.
- **shared**: módulo com componentes do PrimeNG utilizados em várias partes.

O fluxo de autenticação envia usuário e senha para a API, grava o token no `localStorage` e usa o `TokenInterceptor` para anexá-lo às requisições. O `AuthGuard` verifica se o token existe e se não está expirado antes de permitir o acesso às rotas.

## Melhorias e Evoluções

- Navegação protegida com lazy loading dos módulos.
- Tela inicial exibindo gráfico do PrimeNG.
- Listagem de usuários consumindo a API.
- Teste unitário simples para o `AuthGuard`.

Futuramente é possível ampliar os testes, tratar renovação de token e armazenar o JWT de forma mais segura.

## Mock da API

Execute o servidor de mock para simular `/auth/login` e `/usuario`:

```bash
npm run start:mock
```

A API ficará disponível em `http://localhost:3000`.

## Testes

- **Unitários:**

```bash
npm test
```

- **End to End (Cypress):**

```bash
npx cypress run
```

Para visualizar a cobertura utilize `ng test --code-coverage` e abra `coverage/index.html`.

Para executar todos os testes do projeto:

```bash
npm test              # testes unitários
npx cypress run       # testes e2e
```

Certifique-se de que o servidor mock esteja em execução quando os testes precisarem consumir a API.
