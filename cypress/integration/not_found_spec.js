describe("Not Found page", function() {
    it("Random url should display not found", function() {
        cy.visit("/helllo");

        cy.contains("Not Found");
    });
});
