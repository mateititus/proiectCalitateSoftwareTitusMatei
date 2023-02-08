import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
const menCategorySelector = constants.menCategorySelector;
const menCategorySelector = constants.menCategorySelector;
describe("Test", function () {
  it("Verify MEN category", function () {
    cy.visit("/");
    cy.get(menButtonSelector).click();
    cy.get(menCategorySelector).find("li").first().click();
  });
});
