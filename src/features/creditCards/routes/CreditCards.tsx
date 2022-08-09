import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { useUserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { CreditCardList } from "../components/CreditCardList";
import { useCreditCardsQuery } from "../hooks/useCreditCardsQuery";

export function CreditCards() {
  const { user } = useUserContext();

  const navigate = useNavigate();

  const { isLoading, isError, data: creditCards } = useCreditCardsQuery(user);

  if (!user.firstName || isError) {
    return (
      <Box>
        <h3>There has been a problem. Please re-enter your details</h3>
        <Button variant="contained" onClick={() => navigate("/your-details")}>
          Enter details
        </Button>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box>
        <h3>Fetching your Credit Cards...</h3>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <h1>Available Credit Cards</h1>
      <h3>{`Welcome ${user.firstName}, select the credit cards below to get more details.`}</h3>
      <CreditCardList creditCards={creditCards} />
    </Box>
  );
}
