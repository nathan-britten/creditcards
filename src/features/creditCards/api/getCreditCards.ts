import client from "../../../api/client.ts/client.";
import { CreditCard } from "../types";

export async function getCreditCards(
  annualIncome: string
): Promise<CreditCard[]> {
  try {
    const { data } = await client.get(
      `/creditcards?minimumAnnualIncome_lte=${annualIncome}`
    );

    return data;
  } catch (err) {
    throw err;
  }
}
