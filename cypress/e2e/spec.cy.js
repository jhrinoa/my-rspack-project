describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get('h1').should('contain', 'Rspack + React')
  })
})