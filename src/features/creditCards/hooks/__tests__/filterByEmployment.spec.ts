import { testData } from "../../../../test/utilities";
import { filterByEmployment } from "../useCreditCardsQuery";

describe("filterByEmployment", () => {
  it("should return student credit card", () => {
    const expectedOutput = testData;
    const res = filterByEmployment("student", testData);

    expect(res).toEqual(expectedOutput);
  });
  it("should not return student credit card", () => {
    const expectedOutput = [
      {
        id: 2,
        name: "Anywhere Card",
        code: "anywhereCard",
        apr: "33.9",
        balanceOffer: "0",
        purchaseOffer: "0",
        creditAvailable: "300",
        employmentRestrictions: [],
        minimumAnnualIncome: 0,
      },
      {
        id: 3,
        name: "Liquid Card",
        code: "liquidCard",
        apr: "33.9",
        balanceOffer: "12",
        purchaseOffer: "6",
        creditAvailable: "3000",
        employmentRestrictions: [],
        minimumAnnualIncome: 16000,
      },
    ];
    const res = filterByEmployment("partTime", testData);

    expect(res).toEqual(expectedOutput);
  });
});
