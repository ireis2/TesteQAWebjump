///<reference types ="cypress"/>


describe('Navegar até a home', () => {
    it('Navegar até url', () => {
        cy.visit("https://wejump-automation-test.github.io/qa-test/")
        cy.url().should('eq', 'https://wejump-automation-test.github.io/qa-test/')
    })
})
describe('Validar Botões', () => {
    it('Verificar a ausencia dos botoes', () => {
        cy.get('#panel_test_one [id="btn_one"]').click({ timeout: 5000 }).should('not.be.visible').and('be.exist')
        cy.get('#panel_test_one [id="btn_two"]').click({ timeout: 5000 }).should('not.be.visible').and('be.exist')
        cy.get('#panel_test_one [id="btn_three"]').click({ timeout: 5000 }).should('not.be.visible').and('be.exist')
        cy.get('#panel_test_one [id="btn_link"]').click({ timeout: 5000 }).should('not.be.visible').and('be.exist')
        cy.get('#reset_buttons').click()
    })
})
describe('Preencher cadastro', () => {
    it('Preencher campo nome, clicar no botão One, checar OptionThree, selecionar ExampeTwo', () => {
        cy.get('#form_group  p input[id="first_name"]').clear().type('Webjump')
        cy.get('#main_div p [id="btn_one"]').should('be.exist').click()
        cy.get('#panel_test_one [id="opt_three"]').check()
        cy.get('#panel_test_one select ').should('be.visible').select("option_two", {force:true})
    })
    it('Validar logo do selenium webdriver', () => {
        cy.get('img[alt="selenium"] ').should('be.exist')
    })
})

  
