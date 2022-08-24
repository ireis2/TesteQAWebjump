///<reference types ="cypress"/>

const el = require('../support/elements/MapElements').mapElements

describe('Navegar até a homePage', () => {
    it('Validar imagem WebJump da page', () => {
        cy.visit('/qa-test')
        cy.get(el.image.img1).should('be.visible')
    })

    it('Verificar a ausência dos botoes One, Two e Four', () => {
        cy.get(el.buttons.one).click({ timeout: 5000 })
        .should('not.be.visible')
        .and('be.exist')
        cy.get(el.buttons.two).click({ timeout: 5000 })
        .should('not.be.visible')
        .and('be.exist')
        cy.get(el.buttons.four).click({ timeout: 5000 })
        .should('not.be.visible')
        .and('be.exist')
    })
})

describe('Navegar até a homeHtml', () => {
    it('Validar home Html', () => {
        cy.visit('/qa-test/buttons.html')
        cy.contains('Reset Buttons')
    })

    it('Validar ausência dos botões One, Two e Four no Iframe Buttons ', () => {
        cy.get(el.iframeButtons.one).click()
        .should('not.be.visible')
        .and('exist')
        cy.get(el.iframeButtons.two).click()
        .should('not.be.visible')
        .and('exist')
        cy.get(el.iframeButtons.four).click()
        .should('not.be.visible')
        .and('exist') 
    })
})

describe('Preencher cadastro', () => {
    it('Preencher campo firstname, clicar no botão One, check OptionThree, selecionar ExampeTwo', () => {
        cy.visit('/qa-test')
        cy.get(el.cadastro.firstName).clear().type('WebjumpQA - Sou eu')
        cy.get(el.cadastro.btnOne).should('be.exist').click()
        cy.get(el.cadastro.checkThree).check()
        cy.get(el.cadastro.exampleTwo).should('be.visible').select("option_two", {force:true})
    })
    it('Validar presença da imagem do logo do Selenium Webdriver', () => {
        cy.get(el.image.img2).should('be.exist')
        cy.get(el.image.img3).click()
    })
})