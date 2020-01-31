describe("Welcome page", function() {
    it("Open Deezer app", function() {
        cy.visit("/");

        cy.contains("Hello there");
        cy.should("have", "Login");
    });
});
