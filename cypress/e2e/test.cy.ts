describe('App test', () => {

  describe('Places page test with data presented', () => {

    it('should display Homepage', () => {
      cy.visit('')
      cy.get('input[data-cy="query"]').type("coffe")
      cy.get('button[data-cy="search"]').should('be.visible').click()
    })

    it('should display Places page', () => {
      cy.url().should('include', '/places')
      cy.wait(500)
      cy.get('[data-cy="places"]').should('have.length', 10)
      cy.get('button[data-cy="searchAgain"]').should('be.visible')
    })

    it('should display Place item', () => {
      cy.get('[data-cy="placeName"]').should('be.visible')
      cy.get('[data-cy="placeAddress"]').should('be.visible')
      cy.get('button[data-cy="viewPhotos"]').first().should('be.visible').click()
    })

    it('should display Place photos modal', () => {
      cy.wait(500)
      cy.get('img[data-cy="placeImage"]').first().should('be.visible')
      cy.get('img[data-cy="placeImage"]').should('have.length', 6)
    })

  })

  describe('Places page test without data presented', () => {

    it('should display Homepage', () => {
      cy.visit('')
      cy.get('input[data-cy="query"]').type("asd")
      cy.get('button[data-cy="search"]').should('be.visible').click()
    })

    it('should display Places page', () => {
      cy.url().should('include', '/places')
      cy.wait(500)
      cy.get('[data-cy="noPlaces"]').should('be.visible')
      cy.get('button[data-cy="searchAgain"]').should('be.visible')
    })

  })

})