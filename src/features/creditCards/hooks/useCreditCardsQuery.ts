import { useQuery } from "@tanstack/react-query";
import { User } from "../../../types";
import { getCreditCards } from "../api/getCreditCards";
import { CreditCard } from "../types";

export const filterByEmployment = (
  employmentStatus: string,
  data: CreditCard[]
) => {
  return data.filter((creditCard) => {
    if (creditCard.employmentRestrictions.length) {
      return creditCard.employmentRestrictions.includes(employmentStatus);
    }
    return true;
  });
};

const filterCreditCards = (data: CreditCard[], user: User) => {
  if (!user) return data;

  const { employmentStatus } = user;
  const filteredByEmployment = filterByEmployment(employmentStatus, data);

  return filteredByEmployment;
};

export const useCreditCardsQuery = (user: User) => {
  const { annualIncome, employmentStatus } = user;

  return useQuery(
    ["creditCards", annualIncome, employmentStatus],
    () => getCreditCards(annualIncome),
    {
      staleTime: Infinity,
      enabled: Boolean(user),
      select: (data) => filterCreditCards(data, user),
    }
  );
};
