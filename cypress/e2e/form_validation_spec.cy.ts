import { BASE_URL, creditCardHelpers } from "../support/CreditCards";

describe("Form Validation", () => {
  const helpers = creditCardHelpers();

  beforeEach(() => {
    cy.fixture("elizabethEdmundson.json").as("elizabethEdmundson");
  });

  it.only("CC1 - Should show correct credit cards for a student", function () {
    const { elizabethEdmundson } = this;
    cy.visit(`${BASE_URL}/your-details`);

    cy.contains("Search available credit cards").click();

    cy.get("#title-helper-text").should("be.visible");
    cy.get("#postcode-helper-text").should("be.visible");

    cy.get("#title").type("Mr");
    cy.get("#postcode").type("CO4 5YJ");

    cy.get("#title-helper-text").should("not.exist");
    cy.get("#postcode-helper-text").should("not.exist");

    helpers.enterUserData(elizabethEdmundson);

    cy.contains("Search available credit cards").click();
    cy.contains("Fetching your Credit Cards...").should("be.visible");
  });
});
