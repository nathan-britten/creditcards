import { BASE_URL, creditCardHelpers } from "../support/CreditCards";

describe("Credit Card Flow", () => {
  const helpers = creditCardHelpers();

  beforeEach(() => {
    cy.fixture("elizabethEdmundson.json").as("elizabethEdmundson");
    cy.fixture("ollieMurphree.json").as("ollieMurphree");
    cy.fixture("trevorRieck.json").as("trevorRieck");
  });

  it("CC1 - Should show correct credit cards for a student", function () {
    const { elizabethEdmundson } = this;
    cy.visit(`${BASE_URL}/your-details`);

    helpers.enterUserData(elizabethEdmundson);

    cy.contains("Search available credit cards").click();
    cy.contains("Fetching your Credit Cards...").should("be.visible");

    helpers.assertTextValue("Anywhere Card");
    helpers.assertTextValue("Liquid Card");
    helpers.assertTextValue("Student Life");
  });
  it("CC2 - Should show correct credit cards for a low earner", function () {
    const { trevorRieck } = this;
    cy.visit(`${BASE_URL}/your-details`);

    helpers.enterUserData(trevorRieck);

    cy.contains("Search available credit cards").click();
    cy.contains("Fetching your Credit Cards...").should("be.visible");

    helpers.assertTextValue("Anywhere Card");
  });
  it("CC3 - Should show correct credit cards for a full-time worker", function () {
    const { ollieMurphree } = this;
    cy.visit(`${BASE_URL}/your-details`);

    helpers.enterUserData(ollieMurphree);

    cy.contains("Search available credit cards").click();
    cy.contains("Fetching your Credit Cards...").should("be.visible");

    helpers.assertTextValue("Anywhere Card");
    helpers.assertTextValue("Liquid Card");
  });
  it("CC4- Should select cards and show credit", function () {
    const { ollieMurphree } = this;
    cy.visit(`${BASE_URL}/your-details`);

    helpers.enterUserData(ollieMurphree);

    cy.contains("Search available credit cards").click();
    cy.contains("Fetching your Credit Cards...").should("be.visible");

    cy.contains("Select Card").eq(0).click();

    cy.contains("£300").should("be.visible");
    cy.contains("Select Card").eq(0).click();

    cy.contains("£3300").should("be.visible");
    cy.contains("Unselect Card").eq(0).click();
    cy.contains("3000").should("be.visible");

    cy.contains("Unselect Card").should("be.visible");
  });
});
