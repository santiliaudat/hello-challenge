/// <reference types="cypress" />

import { appComponent } from '../support/app.po';

describe('app loading post data', () => {
  context('with a error response', () => {
    it('should show then hide the loading spinner', () => {
      cy.visit('http://localhost:3000/');
      cy.intercept('https://jsonplaceholder.typicode.com/posts', { forceNetworkError: true }).as('getPosts');
      appComponent.loadingSpinner.should('be.visible');
      cy.wait('@getPosts').then(() => {
        appComponent.loadingSpinner.should('not.exist');
        appComponent.errorMessage.should('be.visible');
      });
    });
  });
  
  context('with a success response', () => {
    it('should show then hide the loading spinner', () => {
      cy.visit('http://localhost:3000/');
      cy.intercept('https://jsonplaceholder.typicode.com/posts').as('getPosts');
      appComponent.loadingSpinner.should('be.visible');
      cy.wait('@getPosts').then(() => {
        appComponent.loadingSpinner.should('not.exist');
        appComponent.dataContent.should('be.visible');
      });
    });
  });
});
