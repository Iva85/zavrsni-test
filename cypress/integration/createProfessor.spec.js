import { professor } from '../page_objects/professor.js'

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

    it ('Create professor', () => {
        cy.get('#navbardrop').click()
        professor.createProfessor.click()
        professor.professorFirstName.type(data.professor.firstName)
        professor.professorLastName.type(data.professor.lastName)
        professor.addProfessorImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzGaTuZ2va_pd8JzxeN1CN_h-zoFhmApUZw&usqp=CAU.jpg')
        cy.wait(2000)
        professor.submitProfessor.click()
    })
    
})