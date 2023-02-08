import "../constants/constants.js";
import * as constants from "../../../cypress/support/constants.js";

describe("Test", function () {
  it("should work", function () {
    cy.visit("/");
    cy.get("input").type("Hello");
  });
});
