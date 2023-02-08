import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
describe("Test", function () {
  it("should work", function () {
    cy.visit("/");
    cy.get("input").type("Hello");
  });
});
