describe("POST /verifyLogin", () => {
  it("Verify the account exists", () => {
    cy.request("POST", "http://localhost:8888/users/admin", {
      name: "Jane",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("name", "Jane"); // true
    });

    cy.request({
      "POST",
      ur"api/verifyLogin",
      failOnStatusCode: false,
    }).as("details");
    //Validate status code
    cy.get("@details").its("status").should("eq", 200);
    cy.get("@details").then((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });
});
