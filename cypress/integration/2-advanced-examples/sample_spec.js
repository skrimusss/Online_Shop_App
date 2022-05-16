describe('My First Test', () => {
    it('Checking shop', () => {
        cy.visit('http://127.0.0.1:5500/sneakers.html?')
        cy.contains('image-box__button').click()
    })
})