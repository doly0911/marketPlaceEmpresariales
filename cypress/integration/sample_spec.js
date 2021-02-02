describe('test to view functionality of search and details', () => {
    it('test to load the page', () => {
        cy.visit('http://localhost:8080/#/')
    });

    it('test to search a word in the search bar', () => {
        cy.get('#subs').type('portatil {enter}')
        cy.url().should('include', 'Products/portatil')
    });

    it('test to view the details', () => {
        cy.get('#smallThumbnail:first').click()
    });

    it('test to validate data of details', () => {
        cy.get('#title').should('exist')
        cy.get('#price').should('exist')
    });

    it('test to return home from appbar', () => {
        cy.get('#Logo').click()
        cy.url().should('eq','http://localhost:8080/#/')
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
        cy.get('#smallThumbnail:first').click()
        cy.get('#addToCart:first').click().should(() => {
            expect(localStorage.getItem('cart')).to.exist
        })
    });

    it('test to delete item from cart ', () => {
        cy.visit('http://localhost:8080/#/')
        cy.get('#subs').type('portatil {enter}')
        cy.get('#addCart:first').click({force: true}).should(() => {
            expect(localStorage.getItem('cart')).to.exist
        })
        cy.get('#Carrito-icon').click()
        cy.get('.delete:first').click().should(() => {
            expect(localStorage.getItem('cart')).to.equal('[]')
        })
    });
})
