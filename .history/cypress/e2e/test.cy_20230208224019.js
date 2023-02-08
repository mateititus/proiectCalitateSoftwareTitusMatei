import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
const menCategorySelector = constants.menCategorySelector;
const addToCartButtonSelector = constants.addToCartButtonSelector;
const viewCartButtonSelector = constants.viewCartButtonSelector;
describe("Test", function () {
  it("Verify MEN category", function () {
    cy.visit("/");
    cy.get(menButtonSelector).click();
    cy.get(menCategorySelector).find("li").first().click();
    cy.get(addToCartButtonSelector).eq(0).click({ force: true });
    cy.get(viewCartButtonSelector).click();
  });
});
