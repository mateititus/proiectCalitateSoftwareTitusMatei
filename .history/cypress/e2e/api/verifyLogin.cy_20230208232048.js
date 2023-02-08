describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request("POST", "api/verifyLogin", {
      email: "mtitus755@gmail.com",
      password: "password123",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("message", "User not found!");
    });
  });
});


cy.request({
  method: "POST",
  url: "/login_with_form", // baseUrl is prepend to URL
  form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
  body: {
    username: "jane.lane",
    password: "password123",
  },
});