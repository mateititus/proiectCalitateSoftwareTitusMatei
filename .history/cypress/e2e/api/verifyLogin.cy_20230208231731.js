describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request("POST", "api/verifyLogin", {
      email: "mtitus755@gmail.com",
      password: "test",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("email", "mtitus755@gmail.com");
    });
  });
});
