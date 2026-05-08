describe('Acessa O Colmeia Forms', () => {
  beforeEach('Fazer login', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');// Aqui, o teste está acessando a página de login do site.
    cy.login('qa@test.com','123456'); // Aqui, o teste está utilizando o comando de login personalizado para fazer login com credenciais válidas.
  })
  it('Botão deveria navegar para Colmeia Forms e exibir o título', () => {
    cy.get('.p-2 > .flex').click();// Aqui, o teste está clicando no menu de campanha.
    cy.url().should('include', '/dashboard/campanha');// Verifica se a URL mudou corretamente para a página de campanha
    cy.get(':nth-child(2) > a').click();// Aqui, o teste está clicando no segundo item do menu, que é o link para a página de Colmeia Forms.
    cy.url().should('include', '/dashboard/campanha/colmeia-forms'); // Verifica se a URL mudou corretamente para a página de Colmeia Forms
    cy.get('.text-3xl').should('contain', 'Colmeia Forms'); // Verifica se o título da página contém "Colmeia Forms"
  })
})