import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Light bright app', function() {
  const DEFAULT_COLOR = 'gray';

  const selector = (id) => `[data-testid="${id}"]`;

  const checkBackgroundColor = (selector, negate) => {
    cy.get(selector).should('have.css', 'background-color')
    .and((negate ? 'not.': '') + 'be.colored', DEFAULT_COLOR);
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('click on light changes color', function() {
    const s = selector('light0');
    checkBackgroundColor(s);
    cy.get(s).click();
    checkBackgroundColor(s, true);
  });

  it('double click on light turns the light off', function() {
    const s = selector('light0');
    cy.get(s).click();
    cy.get(s).dblclick();
    checkBackgroundColor(s);
  });

  it('reset all button turns every light off', function() {
    cy.get(selector('light0')).click();
    cy.get(selector('light1')).click();
    cy.get(selector('reset-all')).click();
    checkBackgroundColor(selector('light0'));
    checkBackgroundColor(selector('light1'));
  });

  it('reset button turns recent light(s) off', function() {
    cy.get(selector('light0')).click();
    cy.get(selector('light1')).click();
    cy.get(selector('reset')).click();
    checkBackgroundColor(selector('light0'), true);
    checkBackgroundColor(selector('light1'));
  });

  it('light changes color on mouse enter with mousedown (color mode on)', function() {
    cy.get('.lights-container').trigger('mousedown')
    cy.get(selector('light0')).trigger('mouseover');
    cy.get('.lights-container').trigger('mouseup')
    cy.get(selector('light1')).trigger('mouseover');
    checkBackgroundColor(selector('light0'), true);
    checkBackgroundColor(selector('light1'));
  });

  it('color mode turns off when mouse leaves container', function() {
    cy.get('.lights-container').trigger('mousedown')
    cy.get(selector('light0')).trigger('mouseover');
    cy.get('.lights-container').trigger('mouseout')
    cy.get(selector('light1')).trigger('mouseover');
    checkBackgroundColor(selector('light0'), true);
    checkBackgroundColor(selector('light1'));
  });
})
