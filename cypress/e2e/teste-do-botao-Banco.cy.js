describe('Acessa O Bancos de Dados', () => {
  beforeEach('Fazer login', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');// Aqui, o teste está acessando a página de login do site.
    cy.login('qa@test.com','123456'); // Aqui, o teste está utilizando o comando de login personalizado para fazer login com credenciais válidas.
  })
  it('Botão deveria navegar para o Banco de Dados e exibir o título', () => {
    cy.get('.p-2 > .flex').click();// Aqui, o teste está clicando no menu de campanha.
    cy.url().should('include', '/dashboard/campanha');// Verifica se a URL mudou corretamente para a página de campanha
    cy.get('menu > .flex > :nth-child(1) > a').click();// Aqui, o teste está clicando no primeiro item do menu, que é o link para a página de Bancos de Dados.
    cy.url().should('include', '/dashboard/campanha/bancos-de-dados'); // Verifica se a URL mudou corretamente para a página de Bancos de Dados
    cy.get('.text-3xl').should('contain', 'Bancos de dados'); // Verifica se o título da página contém "Bancos de Dados"
  })
})