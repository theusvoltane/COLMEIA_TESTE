import  {itens}  from '../fixtures/itens.json'; // Aqui, o teste está importando os dados do item a ser adicionado a partir de um arquivo JSON localizado na pasta de fixtures.

describe('Arquivar Item nos Bancos de Dados', () => {
  beforeEach('Fazer login', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');// Aqui, o teste está acessando a página de login do site.
    cy.login('qa@test.com','123456'); // Aqui, o teste está utilizando o comando de login personalizado para fazer login com credenciais válidas.
  })
  beforeEach('Acessar o Banco de Dados', () => {
    cy.bancosDeDados(); // Aqui, o teste está utilizando o comando personalizado para acessar a página de Bancos de Dados.
  })
  beforeEach('Adicionar itens aos Bancos de Dados', () => {
      cy.addItem(); // Aqui, o teste está utilizando o comando personalizado para adicionar itens aos Bancos de Dados, iterando sobre os itens importados do arquivo JSON.
    })
  it('Deveria arquivar um item nos Bancos de Dados', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains(itens[0].item).should('be.visible'); // Aqui, o teste está verificando se o item adicionado está visível na tabela de itens dos Bancos de Dados.
    cy.get(':nth-child(1) > :nth-child(3) > div > .text-blue-100').click(); // Aqui, o teste está clicando no botão de arquivar para o primeiro item da tabela.
    cy.get('.py-1 > :nth-child(1) > .justify-center').click(); // Aqui, o teste está clicando para ver os itens arquivados.
    cy.get('tbody > tr > :nth-child(1)').contains(itens[0].item).should('be.visible'); // Aqui, o teste está verificando se o item arquivado está visível na tabela de itens arquivados dos Bancos de Dados.
  })
})