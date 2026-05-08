describe('Pagina de Login', () => {
  beforeEach('Acessar o site', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
  })
  it('Deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
    cy.get('[name="email"]').type('qa2@test.com'); //Aqui, o teste está inserindo um endereço de email invalidono campo de email.
    cy.get('[name="password"]').type('123456'); //Aqui, o teste está inserindo uma senha válida no campo de senha.
    cy.get('.p-16 > .flex-col > .flex').click(); //Aqui, o teste está clicando no botão de login.
    cy.get('[name="email"] > .text-red-500').should('contain', 'Usuário ou senha inválidos'); // Aqui, seu teste está verificando se a mensagem de erro "Usuário ou senha inválidos" é exibida corretamente na página após a tentativa de login com credenciais inválidas.
  })
})