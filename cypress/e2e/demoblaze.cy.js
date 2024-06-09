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

  //////////////////////
  it('should add multiple products to the cart and check the total', () => {
    cy.get('.hrefch').first().click()
    cy.get('.btn-success').click()
    
    cy.get('.navbar-brand').click()
    cy.get('.hrefch').eq(1).click()
    cy.get('.btn-success').click()
    
    cy.get('#cartur').click()
    cy.url().should('include', 'cart.html')
    cy.wait(30000) // czekaj 30 sekund
    cy.get('tbody tr').should('have.length.at.least', 2)
    cy.get('#totalp').then(($total) => {
      const total = parseFloat($total.text())
      expect(total).to.be.greaterThan(0)
    })
  })

  it('should remove a product from the cart', () => {
    cy.get('.hrefch').first().click()
    cy.get('.btn-success').click()
    
    cy.get('#cartur').click()
    cy.url().should('include', 'cart.html')
    cy.wait(30000) // czekaj 30 sekund
    cy.get('tbody tr').should('have.length.at.least', 1)
    cy.get('.success a').first().click()
    cy.get('tbody tr').should('have.length', 0)
  })

  it('should navigate to the About us page', () => {
    cy.get('[data-target="#videoModal"]').click()
    cy.get('#videoModalLabel').should('contain.text', 'About us')
  })

 

  /////////////////

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





