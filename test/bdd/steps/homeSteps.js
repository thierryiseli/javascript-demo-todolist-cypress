import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the home page', () => {
    cy.visit(Cypress.env('HOST'));
})

When('I add the new todo {string}', (expectedTodo) => {
    cy.get('#new-todo-item').shadow().find('input').type(expectedTodo);
    cy.get('#new-todo-item').shadow().find('input').focus();
    cy.get('#new-todo-item').shadow().find('input').type('{enter}');
})

When('I have done the todo {string}', (expectedTodo) => {
    cy.get('.todo-item-card-text').contains(expectedTodo).parent('.todo-item-card-open').find('.todo-item-card-done-button').click()
})

Then('I can see the new todo {string}', (expectedTodo) => {
    cy.get('.todo-item-card-open').find('.todo-item-card-text').should('have.text', expectedTodo);
})

Then('input field is ready to add next todo', () => {
    cy.get('#new-todo-item').shadow().find('input').should('have.value', '');
})

Then('I do not see an open todo', () => {
    cy.get('.todo-item-card-open').should('not.exist');
})

Then('I do not see an open todo', () => {
    cy.get('.todo-item-card-open').should('not.exist');
})

Then('I can see the done todo {string}', (expectedTodo) => {
    cy.get('.todo-item-card-done').find('.todo-item-card-text').should('have.text', expectedTodo);
})