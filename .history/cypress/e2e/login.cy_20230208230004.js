import * as constants from "../constants/constants.js";

describe("Login into application", function () {
  after(() => {
    cy.visit("/login");
    cy.logout();
  });
  it("Verify login functionality", function () {
    cy.get(menButtonSelector).click();
    cy.get(menCategorySelector).find("li").first().click();
    cy.get(addToCartButtonSelector).eq(0).click({ force: true });
    cy.get(viewCartButtonSelector).click();
    cy.get(checkoutButtonSelector).click();
    cy.get(checkoutMessageTextAreaSelector).type("Please deliver it fast");
    cy.get(placeOrderButtonSelector).click();
    cy.get(cardNameSelector).type("Test");
    cy.get(cardNumberSelector).type("Test");
    cy.get(cvcSelector).type("Test");
    cy.get(expirationMonthSelector).type("Test");
    cy.get(expirationYearSelector).type("Test");
    cy.get(payButtonSelector).click();
    cy.contains("Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
  });
});
