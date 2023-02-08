describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request({
  method: "POST",
  url: "api/verifyLogin", // baseUrl is prepend to URL
  body: {
    email: "mtitus755@gmail.com",
    password: "password123",
  }),
  .then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("message", "User not found!");
    });
  });
});

