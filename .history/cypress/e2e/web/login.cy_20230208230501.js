import * as constants from "../constants/constants.js";

describe("Login into application", function () {
  after(() => {
    cy.visit("/login");
    cy.logout();
  });
  it("Verify login functionality", function () {
    cy.visit("/login");
    cy.login();
  });
});
