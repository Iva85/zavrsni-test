class Gradebook {
    get createGradebookButton() {
        return cy.get('[href="/create-gradebook"]')
    }

    clickGradebookButton() {
        this.createGradebookButton.click()
    }

    get gradeBookTitle() {
        return cy.get('#title')
    }

    get professorList() {
        return cy.get('#professor')
    }

    get submitButton() {
        return cy.get('.btn.btn-primary')
    }

    get allGradebooks() {
        return cy.get('.navbar > :nth-child(1) > :nth-child(1) > .nav-link')
    }

    clickAllGradeBooks() {
        this.allGradebooks.click()
    }
}

export const gradebook = new Gradebook()