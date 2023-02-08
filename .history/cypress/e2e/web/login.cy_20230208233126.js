

describe("Login into application", function () {
  after(() => {
    cy.logout();
  });
  it("Verify login functionality", function () {
    cy.visit("/login");
    cy.login();
  });
});
