describe("GET /productsList", () => {
  it("Get the products list", () => {
    cy.request({
      method: "GET",
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
