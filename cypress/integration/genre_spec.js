describe("Genres List page", function() {
    it("genres list exists", function() {
        cy.visit("/genre");

        cy.wait(500);

        cy.contains("Genres List");
        cy.should("have", "Pop");
    });

    it("click card should open modal", function() {
        cy.visit("/genre");

        cy.wait(500);

        cy.contains("Genres List");
        cy.get(".card")
            .first()
            .click();

        cy.contains("Genres Artists");
        cy.url().should("include", "/genre/0");
        cy.get("button")
            .should("have", "Close")
            .click();
    });

    it("click show artists should redirect", function() {
        cy.visit("/genre");

        cy.wait(500);

        cy.contains("Genres List");
        cy.get(".card")
            .first()
            .find("a")
            .should("have", "Show Artists")
            .click();

        cy.contains("Genre Artists List");
        cy.url().should("include", "/genre/0/artists");
        cy.get("button")
            .should("have", "Back")
            .click();

        cy.url().should("include", "/genre");
        cy.contains("Genres List");
    });
});
