const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")

describe("Login test", () => {
    before (() => {
        cy.visit('/')
    })
    
    it ("Url and visibility check", () => {
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/login')
        cy.get(locators.login.submit).should('be.visible')
    })

    
    it ('Login', () => {
        cy.get(locators.login.email).type(data.register.email)
        cy.get(locators.login.password).type(data.register.password)
        cy.get(locators.login.submit).click()
    })
    
})