"use strict";
import * as constants from "../constants/constants.js";

Cypress.Commands.add("login", () => {
  const email = constants.email;
  const password = constants.password;

  const emailSelector = constants.emailSelector;
  const passwordSelector = constants.passwordSelector;
  const loginButtonSelector = constants.loginButtonSelector;

  cy.get(emailSelector).type(email);
  cy.get(passwordSelector).type(password);
  cy.get(loginButtonSelector).click();
});

Cypress.Commands.add("logout", () => {
  const logOutButtonSelector = constants.logOutButtonSelector;

  cy.get(logOutButtonSelector).click();
  cy.url({ timeout: 20000 }).should("include", arrivalsUrl);
});
