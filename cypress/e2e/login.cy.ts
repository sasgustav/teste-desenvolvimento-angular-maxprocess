describe('Login flow', () => {
  it('logs in and displays chart', () => {
    cy.visit('/auth/login');
    cy.get('#username').type('demo-gustavo@gmail.com');
    cy.get('#password').type('123456');
    cy.contains('button', 'Entrar').click();
    cy.url().should('include', '/home');
    cy.get('canvas').should('be.visible');
  });
});
