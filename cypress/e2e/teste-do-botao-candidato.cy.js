describe('Acessa menu do candidato', () => {
  beforeEach('Fazer login', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');// Aqui, o teste está acessando a página de login do site.
    cy.login('qa@test.com','123456'); // Aqui, o teste está utilizando o comando de login personalizado para fazer login com credenciais válidas.
  })
  it('Campo deveria ser um botão', () => {
    cy.get('.ml-3 > .flex').should('contain', 'candidato'); // Verifica se o elemento contém o texto "candidato"
    cy.get('.ml-3 > .flex').parent().should('have.prop', 'tagName', 'BUTTON'); // Verifica se o elemento pai é um botão
  })
})