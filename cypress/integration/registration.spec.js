const locators = require("../fixtures/locators.json")
//const faker = require('faker')
const data = require("../fixtures/data.json")

describe("Registration test", () => {
    before (() => {
        cy.visit('/')
        cy.get(locators.register.navRegister).click()
    })
    //ovo je da napravimo usera sa istim podacima, ukoliko je potrebno da se na primer
    //ponovi password, ili ime, ili email...
    /*let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }*/
    /*it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on register button", () => {
        cy.get("li:nth-of-type(2) > .nav-buttons.nav-link").click()
    })*/
    /*it ('Register-failed', () => {
        //cy.get(locators.register.firstName).type('')
        cy.get(locators.register.lastName).type('Test1')
        cy.get(locators.register.email).type('ivatest1@test.com')
        cy.get(locators.register.password).type('test1234')
        cy.get(locators.register.password-confirmation).type('test1234')
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    })*/
    it ('Register', () => {
        cy.get(locators.register.firstName).type(data.register.firstName)
        cy.get(locators.register.lastName).type(data.register.lastName)
        cy.get(locators.register.password).type(data.register.password)
        cy.get(locators.register.passwordConfirmation).type(data.register.passwordConfirmation)
        cy.get(locators.register.email).type(data.register.email)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
        cy.wait(2000)
        
    })
    it ('Sign out', () => {
        cy.get(locators.register.signOut).click()
    })
    /*it ('Register without first name', () => {
        cy.get(locators.register.lastName).type(faker.name.lastName())
        cy.get(locators.register.email).type(data.loginRegister.email)
        cy.get(locators.register.password).type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    })   
    it ('Register without last name', () => {
        cy.get(locators.register.firstName).clear().type(faker.name.firstName())
        cy.get(locators.register.lastName).clear()
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    })  
    it ('Register without email', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear()
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    })    
    it ('Register without password', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear()
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    }) 
    it ('Register without confirmed password', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear()
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submit).click()
    })   
    it ('Register without accepted terms', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.submit).click()
    })    
    it ('Register without @ and domain', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.emailWithoutET)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
    })
    it ('Register without domain', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.emailWithoutDomain)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
    })
    it ('Register with existing email', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
    })*/
    
})