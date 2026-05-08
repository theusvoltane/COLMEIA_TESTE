describe('Pagina de Login', () => {
  beforeEach('Acessar o site', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
  })
  it('Deve permitir o login com credenciais válidas', () => {
    cy.get('[name="email"]').type('qa@test.com'); // Aqui, o teste está inserindo um endereço de email válido no campo de email.
    cy.get('[name="password"]').type('123456'); // Aqui, o teste está inserindo uma senha válida no campo de senha.
    cy.get('.p-16 > .flex-col > .flex').click(); // Aqui, o teste está clicando no botão de login.
    
   cy.get('.fixed > .flex-col > .text-lg').should('contain', 'Login realizado com sucesso'); // Aqui, o teste está verificando se a mensagem de login bem-sucedido aparece na tela.
   cy.get('.fixed > .flex-col > .flex').should('contain', 'Continuar'); // Aqui, o teste está verificando se o botão de continuar aparece na tela.
   cy.get('.fixed > .flex-col > .flex').click();// Aqui, o teste está clicando no botão de continuar para prosseguir após o login bem-sucedido.
  })
})