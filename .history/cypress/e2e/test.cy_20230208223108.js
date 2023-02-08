import * as constants from "../constants/constants.js";


describe("Test", function () {
  it("should work", function () {
    cy.visit("/");
    cy.get("input").type("Hello");
  });
});
