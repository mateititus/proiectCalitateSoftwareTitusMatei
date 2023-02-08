describe("GET /productsList", () => {
  it("Get the list of products", () => {
    cy.request("GET", "/productsLiç").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results).length.to.be.greaterThan(1);
    });
  });
});
