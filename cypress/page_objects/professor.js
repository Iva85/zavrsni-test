class Professor {
    get createProfessor() {
        return cy.get('[href="/create-professor"]')
    }

    get professorFirstName() {
        return cy.get('#firstName')
    }

    get professorLastName() {
        return cy.get('#lastName')
    }

    get professorImageButton() {
        return cy.get('.mb-2 > .btn')

    }

    get professorImage() {
        return cy.get('.form-control')
    }

    addProfessorImage(url) {
        this.professorImageButton.click()
        this.professorImage.type(url)
    }

    get submitProfessor() {
        return cy.get('[name="submit"]')
    }
}

export const professor = new Professor()