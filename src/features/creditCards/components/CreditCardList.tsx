import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CreditCard } from "../types";
import { CreditCardItem } from "./CreditCardItem";

interface Props {
  creditCards: CreditCard[] | undefined;
}

export function CreditCardList(props: Props) {
  const { creditCards } = props;

  const [totalCredit, setTotalCredit] = useState(0);

  const handleSettingCredit = (amount: number) => {
    setTotalCredit(amount);
  };

  if (!creditCards) {
    return <Box>No credit cards match your criteria</Box>;
  }

  return (
    <>
      <Typography variant="h5">{`Total credit available: £${totalCredit}`}</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start",
          "& > div": {
            m: 2,
          },
        }}
      >
        {creditCards.map((creditCard, index) => {
          return (
            <CreditCardItem
              key={creditCard.id}
              creditCard={creditCard}
              setTotalCredit={handleSettingCredit}
              totalCredit={totalCredit}
            />
          );
        })}
      </Box>
    </>
  );
}
