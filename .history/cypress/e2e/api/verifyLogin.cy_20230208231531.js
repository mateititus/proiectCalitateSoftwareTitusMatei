describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request({
      method: "POST",
      url: "api/verifyLogin",
      failOnStatusCode: false,
    }).as("details");
    //Validate status code
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });
});
