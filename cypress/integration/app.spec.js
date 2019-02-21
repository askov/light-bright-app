import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('My First Test', function() {
  it('Does not do much!', function() {
    // expect(true).to.equal(true);
    const selector = '[data-testid="light0"]';
    cy.visit('/');
    cy.get(selector).should('have.css', 'background-color')
      .and('be.colored', 'gray');
    cy.get(selector).click();
    cy.get(selector).should('have.css', 'background-color')
      .and('not.be.colored', 'gray');
    cy.get('.lights-container').trigger('mousedown')
  })
})
