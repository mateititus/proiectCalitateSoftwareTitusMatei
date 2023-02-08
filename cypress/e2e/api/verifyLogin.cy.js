describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request({
      method: "POST",
      url: "api/verifyLogin",
      body: {
        email: "mtitus755@gmail.com",
        password: "test",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
