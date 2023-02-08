describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request("POST", "api/verifyLogin", {
      name: "titus",
      password: "test",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("name", "Jane"); // true
    });
  });
});
