describe('Demoblaze Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoblaze.com/')
  })

  it('should display the carousel', () => {
    cy.get('#carouselExampleIndicators').should('be.visible')
  })

  it('should have three carousel items', () => {
    cy.get('.carousel-item').should('have.length', 3)
  })

  it('should navigate to product details when clicking on a product', () => {
    cy.get('.hrefch').first().click()
    cy.url().should('include', 'prod.html')
    cy.get('.name').should('be.visible')
  })

  it('should add a product to the cart', () => {
    cy.get('.hrefch').first().click()
    cy.get('.btn-success').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.')
    })
  })

  it('should navigate to cart and display the added product', () => {
    cy.get('.hrefch').first().click()
    cy.get('.btn-success').click()
    
    cy.get('#cartur').click()
    cy.url().should('include', 'cart.html')
    cy.wait(30000)
    cy.get('tbody tr').should('have.length.at.least', 1)
  })

  it('should navigate to contact and send a message', () => {
    cy.get('[data-target="#exampleModal"]').click()
    cy.get('#recipient-email').type('test@example.com')
    cy.get('#recipient-name').type('Test User')
    cy.get('#message-text').type('This is a test message.')
    cy.get('#exampleModal .btn-primary').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Thanks for the message!!')
    })
  })

  it('should log in successfully with valid credentials', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type('testuser121212121212133433')
    cy.get('#loginpassword').type('testpassword')
    cy.get('#logInModal .btn-primary').click()

  })

  it('should log in successfully with valid credentials', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type('testuser121212121212133433')
    cy.get('#loginpassword').type('testpassword')
    cy.get('#logInModal .btn-primary').click()
    
  })

  
  
})





