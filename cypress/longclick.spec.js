/// <reference types="cypress" />

describe('Teste Longclick', () => {

    it('Visitar página', () => {
        cy.visit('./src/index.html')
    })

    it('Expandir quadrado', () => {
        cy.get('.square')
            .should('be.visible')
            .should('have.css', 'height', '90px')
            .should('have.css', 'width', '90px')
            .trigger('mousedown', 'center')
            .wait(500)
            .trigger('mouseup')
    })

    it('Validar expansão', () => {
        cy.get('.square')
            .should('be.visible')
            .should('have.css', 'height', '225px')
            .should('have.css', 'width', '225px')
    })
})