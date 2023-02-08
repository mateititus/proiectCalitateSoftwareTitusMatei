describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request({
      method: "POST",
      url: "api/verifyLogin", // baseUrl is prepend to URL
      body: {
        email: "mtitus755@gmail.com",
        password: "test",
      },
    })then((response) => {
  expect(response.status).to.eq(200)
  expect(response.body).to.have.length(500)
  expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});
