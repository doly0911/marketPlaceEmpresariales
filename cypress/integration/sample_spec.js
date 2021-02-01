describe('test for view functionality of search and details', () => {
    it('test to load the page', () => {
        cy.visit('http://localhost:8080/#/')
    });

    it('test to search a word in the search bar', () => {
        cy.get('#subs').type('portatil {enter}')
        cy.url().should('include', 'Products/portatil')
    })

    it('test to view the details', () => {
        cy.get('#productImage:first').click()
    })

    it('test to validate data of details', () => {
        cy.get('#title').should('exist')
        cy.get('#price').should('exist')

    });
})

describe('test for carrito', () => {
    it('test to add to cart from products view ', () => {
        cy.visit('http://localhost:8080/#/')
        cy.get('#subs').type('portatil {enter}')
        cy.get('#addCart:first').click({force: true}).should(() => {
            expect(localStorage.getItem('cart')).to.exist
        })

    });

    it('test to add to cart from details view ', () => {
        cy.clearLocalStorage()
        cy.get('#productImage:first').click()
        cy.get('#addToCart:first').click().should(() => {
            expect(localStorage.getItem('cart')).to.exist
        })
    });
})