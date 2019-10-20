import { getGreeting } from '../support/app.po';

describe('flight-search-app-angular', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to flight-search-app-angular!');
  });
});
