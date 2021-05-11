describe('comments', () => {
  context('on click comments button', () => {
    it('change button text', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.link:first').contains('Show comments');
      cy.get('.link:first').click();
      cy.get('.link:first').contains('Hide comments');
      cy.get('.link:first').click();
      cy.get('.link:first').contains('Show comments');
    });
    it('show comments', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.link:first').click();
      cy.get('[data-cy="comments-container"]');
    });
  });
  
  context('submit comment form', () => {
    it('submit form and show the comment in the last position', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.link:first').click();
      cy.get('[name="name"]').type('Juan Perez');
      cy.get('[name="email"]').type('juanperez@challenge.com');
      cy.get('[name="body"]').type('My first comment');
      cy.get('[type="submit"]').click();
      cy.get('.comment-object').last().contains('h4', 'Juan Perez').contains('span', 'juanperez@challenge.com');
    });
  });
});
