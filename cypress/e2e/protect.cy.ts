describe('Route guard', () => {
  it('redirects to login without token', () => {
    cy.visit('/users', { failOnStatusCode: false });
    cy.url().should('include', '/auth/login');
  });
});
