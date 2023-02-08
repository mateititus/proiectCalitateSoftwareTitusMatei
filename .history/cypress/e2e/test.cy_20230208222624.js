describe("Test", function () {
  it("should work", function () {
    cy.visit("http://localhost:3000");
    cy.get("input").type("Hello");
  });
});
