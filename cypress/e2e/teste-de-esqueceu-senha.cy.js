describe('Pagina de Login', () => {
  beforeEach('Acessar o site', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
  })
  it('Deve permitir criar uma nova senha', () => {
    cy.get('[name="email"]').type('qa@test.com');
    cy.get('.mt-4').click(); // Clica no link "Esqueci minha senha"
    cy.url().should('include', '/forgot-password'); // Verifica se a URL mudou para a página de recuperação 
  })
})