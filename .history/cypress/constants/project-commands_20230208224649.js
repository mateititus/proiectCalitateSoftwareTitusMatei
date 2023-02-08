"use strict";
import * as constants from "../constants/constants.js";

Cypress.Commands.add("login", (email, url) => {
  const email = constants.email;
  const password = constants.password;

  const emailSelector = constants.emailSelector;
  const passwordSelector = constants.passwordSelector;
  const loginButtonSelector = constants.loginButtonSelector;

  cy.get("body").then(($body) => {
    if ($body.text().includes(signIn)) {
      cy.get(emailSelector).type(email);
      cy.get(passwordSelector).type(password);
      cy.get(loginButtonSelector).click();
    }
  });
});
Cypress.Commands.add("logout", () => {
  const userNameSelector = constants.userNameSelector;
  const logOutButtonSelector = constants.logOutButtonSelector;
  const heading = constants.heading;
  cy.get(userNameSelector).click();
  cy.get(logOutButtonSelector).click();
  cy.get(heading).contains("Sign in");
});
