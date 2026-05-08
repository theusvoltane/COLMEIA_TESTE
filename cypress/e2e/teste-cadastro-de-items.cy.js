import  {itens}  from '../fixtures/itens.json'; // Aqui, o teste está importando os dados do item a ser adicionado a partir de um arquivo JSON localizado na pasta de fixtures.

describe('Adicionar Item nos Bancos de Dados', () => {
  beforeEach('Fazer login', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');// Aqui, o teste está acessando a página de login do site.
    cy.login('qa@test.com','123456'); // Aqui, o teste está utilizando o comando de login personalizado para fazer login com credenciais válidas.
  })
    beforeEach('Acessar o Banco de Dados', () => {
    cy.bancosDeDados(); // Aqui, o teste está utilizando o comando personalizado para acessar a página de Bancos de Dados.
  })
  it('Deveria adicionar todos os itens aos Bancos de Dados', () => {
    itens.forEach(item => {
      cy.get('.py-1 > :nth-child(2) > .gap-2').click(); // Aqui, o teste está clicando no botão para adicionar um novo item aos Bancos de Dados.
      cy.get('.flex-col > div.w-full > .w-full').type(item.item); // Aqui, o teste está digitando o nome do item a ser adicionado.
      cy.get('.fixed > .flex-col > .flex').click(); // Aqui, o teste está clicando no botão para confirmar a adição do item.
    })
  })
})