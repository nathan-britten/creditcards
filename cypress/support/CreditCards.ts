export const creditCardHelpers = () => ({
  enterUserData(user) {
    const {
      title,
      firstName,
      lastName,
      dob,
      employmentStatus,
      annualIncome,
      houseNumber,
      postcode,
    } = user;
    cy.get("#title").type(title);
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#dob").type(dob);
    cy.get(`div[id="employmentStatus"]`).click();
    cy.get(`ul[role=listbox] li[data-value='${employmentStatus}'`).click({
      force: true,
    });
    cy.get("#annualIncome").type(annualIncome);
    cy.get("#houseNumber").type(houseNumber);
    cy.get("#postcode").type(postcode);
  },
  assertTextValue(value) {
    cy.contains(value).should("be.visible");
  },
});
export const BASE_URL = "http://localhost:3001";
