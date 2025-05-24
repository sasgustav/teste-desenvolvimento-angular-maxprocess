describe('Fluxo completo de exclusão', () => {
  it('faz login e exclui um usuário', () => {
    cy.visit('/auth/login');
    cy.get('#username').type('demo-gustavo@gmail.com');
    cy.get('#password').type('123456');
    cy.contains('button', 'Entrar').click();
    cy.url().should('include', '/home');

    cy.intercept('GET', '/users', [
      { id: 1, name: 'Alice', email: 'a@example.com' },
    ]).as('getUsers');
    cy.intercept('DELETE', '/users/1', {}).as('delUser');

    cy.contains('Usuários').click();
    cy.wait('@getUsers');
    cy.get('table tbody tr').should('have.length', 1);
    cy.get('button[aria-label="Excluir"]').click();
    cy.contains('button', 'Sim').click();
    cy.wait('@delUser');
  });
});
