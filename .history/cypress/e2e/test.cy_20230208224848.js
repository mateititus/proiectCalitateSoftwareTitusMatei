import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
const menCategorySelector = constants.menCategorySelector;
const addToCartButtonSelector = constants.addToCartButtonSelector;
const viewCartButtonSelector = constants.viewCartButtonSelector;
const checkoutButtonSelector = constants.checkoutButtonSelector;
describe("Test", function () {

 before(() => {
   cy.login(superUserEmail, "/");
   cy.url({ timeout: 20000 }).should("include", arrivalsUrl);
   cy.selectCustomView("cypressTitus");
   cy.get(searchEntriesSelector, { timeout: 30000 })
     .should("be.visible")
     .contains("entries");
   cy.searchFlightByFLNO("2S 1337");
   cy.contains(searchShowing1Entries, { timeout: 30000 }).should("be.visible");
 });s  it("Verify MEN category", function () {
    cy.get(menButtonSelector).click();
    cy.get(menCategorySelector).find("li").first().click();
    cy.get(addToCartButtonSelector).eq(0).click({ force: true });
    cy.get(viewCartButtonSelector).click();
    cy.get(checkoutButtonSelector).click();
  });
});
