describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request({
      method: "POST",
      url: "api/verifyLogin", // baseUrl is prepend to URL
      body: {
        email: "mtitus755@gmail.com",
        password: "test",
      },
    }).then((resp) => {
  // redirect status code is 302
  expect(resp.status).to.eq(302)
  expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
  });
});
