///<reference types ="cypress"/>


describe('Navegar até a homeHtml', () => {
    it('Ir até url', () => {
        cy.visit('https://wejump-automation-test.github.io/qa-test/buttons.html')
    })
    it('Validar ausência de botões no Iframe', () => {
        cy.get('.col-sm-12 [id="btn_one"]').click().should('not.be.visible').and('exist')
        cy.get('.col-sm-12 [id="btn_two"]').click().should('not.be.visible').and('exist')
        cy.get('.col-sm-12 [id="btn_three"]').click().should('not.be.visible').and('exist')
        cy.get('.col-sm-12 [id="btn_link"]').click().should('not.be.visible').and('exist')

    })
})


