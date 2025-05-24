# Melhorias no Desafio Angular JWT

Este repositório contém uma aplicação Angular simples utilizada no teste técnico da MaxProcess. O projeto original já fornecia autenticação básica, uma página com gráfico e uma listagem de usuários. Esta versão recebeu ajustes para demonstrar uma estrutura ligeiramente mais organizada e boas práticas. Como o ambiente não possui `chart.js`, o dashboard exibe uma tabela simples no lugar do gráfico.

## Como executar

```bash
npm install
npm start
```

Os arquivos padrão do Angular, como `package.json`, `tsconfig` e `polyfills.ts`, estão incluídos e são suficientes para rodar a aplicação.

## Melhorias Implementadas

- **Configuração de ambiente**: criados `environment.ts` e `environment.prod.ts` para centralizar a URL da API.
- **Inicialização em produção**: `main.ts` ativa o modo de produção ao realizar o build.
- **Uso do token**: `AuthService` consome a base da API a partir do ambiente.
- **AuthGuard**: verifica a expiração do JWT antes de liberar as rotas protegidas.

Essas mudanças deixam o projeto mais fácil de manter e um pouco mais seguro.

## Análise Adicional

O projeto original já demonstrava um fluxo simples de autenticação JWT com interceptor e proteção de rotas. Entretanto, os templates ficavam inline e as chamadas de API misturadas nos componentes.

### Sugestões de Melhoria
- Extrair requisições de API para services, separando responsabilidades.
- Tratar expiração de token e erros 401 de forma global.
- Incluir navegação básica e funcionalidade de logout.
- Usar templates e estilos externos para manter os componentes limpos.

### O que foi implementado
- Criação do `UserService` encapsulando o acesso à API de usuários.
- Adição de método de logout e tratamento de erros no `TokenInterceptor`.
- Inclusão de cabeçalho de navegação com botão de sair no `AppComponent`.
- Conversão dos componentes para arquivos HTML e CSS próprios.
- Ativação do módulo de animações necessário ao PrimeNG.

Essas alterações tornam o exemplo mais próximo de uma aplicação real e fácil de evoluir.

## Aprimoramentos de Design

Para melhorar a experiência do usuário a aplicação agora utiliza componentes de layout do PrimeNG:

- Navbar recriada com `Menubar` para um cabeçalho mais limpo.
- Páginas envolvidas por `Card` oferecendo separação visual e espaçamento.
- Formulário de login com `Password` e `Message`, além de classes PrimeFlex para melhor alinhamento.
- Inclusão da folha de estilos do PrimeIcons para exibir ícones.

Essas atualizações modernizam o visual e mantêm o código simples.

## Rotas Disponíveis

A aplicação possui três rotas principais:

- `/` - tela de **login**;
- `/home` - dashboard protegido pelo `AuthGuard`;
- `/users` - listagem de usuários, também protegida.

## Como testar todas as telas

1. Execute `npm start` para iniciar o servidor de desenvolvimento.
2. Abra `http://localhost:4200/` no navegador e realize o **login** com usuário e senha válidos.
3. Você será redirecionado para `/home`, onde poderá visualizar a tabela do dashboard.
4. Utilize o menu superior para acessar `/users` e conferir a listagem de usuários.
5. No menu também está disponível a opção **Sair**, que remove o token e volta para a tela de login.

Com esses passos é possível navegar por todas as rotas da aplicação manualmente.
