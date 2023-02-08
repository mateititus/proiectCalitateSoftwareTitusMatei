import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
describe("Test", function () {
  it("Verify", function () {
    cy.visit("/");
    cy.get("input").type("Hello");
  });
});
