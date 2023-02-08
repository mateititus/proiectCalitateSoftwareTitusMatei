import * as constants from "../constants/constants.js";

const menButtonSelector = constants.menButtonSelector;
const menCategorySelector = constants.menCategorySelector;
const addToCartButtonSelector = constants.addToCartButtonSelector;
const viewCartButtonSelector = constants.viewCartButtonSelector;
const checkoutButtonSelector = constants.checkoutButtonSelector;
const checkoutMessageTextAreaSelector =
  constants.checkoutMessageTextAreaSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;
const placeOrderButtonSelector = constants.placeOrderButtonSelector;



export const placeOrderButtonSelector
export const cardNameSelector = '[data-qa="name-on-card"]';
export const cardNumberSelector = '[data-qa="card-number"]';
export const cvcSelector = '[data-qa="cvc"]';
export const expirationMonthSelector = '[data-qa="expiry-month"]';
export const expirationYearSelector = '[data-qa="expiry-year"]';
export const payButtonSelector = '[data-qa="pay-button"]';
describe("Test", function () {
  before(() => {
    cy.visit("/login");
    cy.login();
  });
  it("Add a Tshirt to cart and proceed to checkout", function () {
    cy.get(menButtonSelector).click();
    cy.get(menCategorySelector).find("li").first().click();
    cy.get(addToCartButtonSelector).eq(0).click({ force: true });
    cy.get(viewCartButtonSelector).click();
    cy.get(checkoutButtonSelector).click();
    cy.get(checkoutMessageTextAreaSelector).type("Please deliver it fast");
    cy.get(placeOrderButtonSelector).click();






    cy.contains("Congratulations! Your order has been confirmed!").should(
      "be.visible"
    );
  });
});
