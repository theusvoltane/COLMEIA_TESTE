// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import  {itens}  from '../fixtures/itens.json'; // Aqui, o teste está importando os dados do item a ser adicionado a partir de um arquivo JSON localizado na pasta de fixtures.

 Cypress.Commands.add('login', (email, password) => {     
    cy.get('[name="email"]').type(email); // Aqui, o teste está inserindo um endereço de email válido no campo de email.
    cy.get('[name="password"]').type(password); // Aqui, o teste está inserindo uma senha válida no campo de senha.
    cy.get('.p-16 > .flex-col > .flex').click(); // Aqui, o teste está clicando no botão de login. 
    cy.get('.fixed > .flex-col > .flex').click();// Aqui, o teste está clicando no botão de continuar para prosseguir após o login bem-sucedido.
 })

   Cypress.Commands.add('bancosDeDados', () => {
    cy.get('.p-2 > .flex').click();// Aqui, o teste está clicando no menu de campanha.
    cy.get('menu > .flex > :nth-child(1) > a').click();// Aqui, o teste está clicando no primeiro item do menu, que é o link para a página de Bancos de Dados.
  })

  Cypress.Commands.add('addItem', () => {
    itens.forEach(item => {
      cy.get('.py-1 > :nth-child(2) > .gap-2').click(); // Aqui, o teste está clicando no botão para adicionar um novo item aos Bancos de Dados.
      cy.get('.flex-col > div.w-full > .w-full').type(item.item); // Aqui, o teste está digitando o nome do item a ser adicionado.
      cy.get('.fixed > .flex-col > .flex').click(); // Aqui, o teste está clicando no botão para confirmar a adição do item.
    });
  });