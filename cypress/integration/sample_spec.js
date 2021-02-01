describe('test for view functionality of search and details', () => {
    it('test to load the page', () => {
        cy.visit('http://localhost:8080/#/')
    });

    it('test to search a word in the search bar', () => {
        cy.get('#subs').type('carro {enter}')
    })

    it('test to view the details', () => {
        cy.get('.v-responsive__content:first').click()
    })
})


describe('test for carrito', () => {
    it('test to add to cart', () => {
        cy.visit('http://localhost:8080/#/')
        cy.get('#subs').type('carro {enter}')
        cy.get('.v-btn--rounded:first').click()
        cy.wait(1000)
        expect(localStorage.getItem('cart')).to.exist()
    });


})