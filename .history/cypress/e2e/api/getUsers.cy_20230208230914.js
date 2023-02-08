describe("GET /users", () => {
  it("Get the list of products", () => {
    cy.request("GET", "/users").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results).length.to.be.greaterThan(1);
    });
  });
});
