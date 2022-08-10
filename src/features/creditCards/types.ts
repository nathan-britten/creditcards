export interface CreditCard {
  id: number;
  name: string;
  code: string;
  apr: string;
  balanceOffer: string;
  purchaseOffer: string;
  creditAvailable: string;
  minimumAnnualIncome: number;
  employmentRestrictions: string[];
}
