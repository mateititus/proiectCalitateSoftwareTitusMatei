describe("GET /productsList", () => {
  it("API - GET details", () => {
    cy.request({
      method: "GET",
      url: "/productsList",
      failOnStatusCode: false,
    }).as("details");
    //Validate status code
    cy.get("@details").its("status").should("eq", 200);
  });
});
