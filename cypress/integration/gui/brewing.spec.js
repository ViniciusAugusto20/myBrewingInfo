/// <reference types="cypress" />

describe("Brewing", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`)) ;

  it("try to login and see home page", () => {
    cy.get("#qa-name-input").type("Vinicius Augusto");
    cy.get("#qa-checkbox").check();
    cy.get(`#qa-submit-button`).click()
   });  

   it("try to remove a item on list", () => {
    cy.get("#qa-name-input").type("Vinicius Augusto");
    cy.get("#qa-checkbox").check();
    cy.get(`#qa-submit-button`).click()
    cy.get(`#qa-remove-button-banjo-brewing-fayetteville`).click()
   });  

   it("try to change page", () => {
    cy.get("#qa-name-input").type("Vinicius Augusto");
    cy.get("#qa-checkbox").check();
    cy.get(`#qa-submit-button`).click()
    cy.get('ul li:last').click()
   });  

   it("try to back login screen", () => {
    cy.get("#qa-name-input").type("Vinicius Augusto");
    cy.get("#qa-checkbox").check();
    cy.get(`#qa-submit-button`).click()
    cy.get(`#qa-backButton`).click()
   });  

   it("try to verify if has error case user don't check age", () => {
    cy.get("#qa-name-input").type("Vinicius Augusto");
    cy.get(`#qa-checkbox-error`).should("exist")
    cy.get(`#qa-submit-button`).should('be.disabled')
   });  

   it("try to verify on send not alphabetical char to input name has error", () => {
    cy.get("#qa-name-input").type("Vinicius @ugusto");
    cy.get(`#qa-name-input-error`).should("exist")
    cy.get(`#qa-submit-button`).should('be.disabled')
   });  

   it("try to verify if button `Enter` is disabled with no props passed", () => {
    cy.get(`#qa-submit-button`).should('be.disabled')
   });  
   
   
  
  
});
