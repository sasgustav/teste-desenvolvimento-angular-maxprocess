describe('User list', () => {
  it('shows users table', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake');
    });
    cy.intercept('GET', '/users', [
      { login: 'alice', email: 'alice@example.com' },
      { login: 'bob', email: 'bob@example.com' },
    ]);
    cy.visit('/users');
    cy.get('table tbody tr').should('have.length', 2);
  });
});
