import * as constants from "../constants/constants.js";

const menButtonSelector = constans.menButtonSelector;
describe("Test", function () {
  it("should work", function () {
    cy.visit("/");
    cy.get("input").type("Hello");
  });
});
