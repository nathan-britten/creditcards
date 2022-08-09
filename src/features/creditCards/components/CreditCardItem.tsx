import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CreditCard } from "../types";

interface Props {
  creditCard: CreditCard;
  setTotalCredit: (amount: number) => void;
  totalCredit: number;
}

export function CreditCardItem(props: Props) {
  const { creditCard, setTotalCredit, totalCredit } = props;

  const [selected, setSelected] = useState(false);

  const handleClick = (creditAvailable: any) => {
    const amount = parseInt(creditAvailable);
    if (selected) {
      setTotalCredit(totalCredit - amount);
    } else {
      setTotalCredit(totalCredit + amount);
    }
    setSelected(!selected);
  };

  if (!creditCard) return null;

  const { name, apr, balanceOffer, purchaseOffer, creditAvailable, code } =
    creditCard;

  return (
    <Card
      variant="outlined"
      sx={[{ minWidth: 420 }, selected ? { backgroundColor: "#E8E8E8" } : {}]}
    >
      <CardContent>
        <Typography variant="h3" color="text.secondary" gutterBottom>
          {name}
        </Typography>
        {selected ? (
          <>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {`APR: ${apr}%`}
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {`Balance Transfer Offer Duration: ${balanceOffer} months`}
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {`Purchase Offer Duration: ${purchaseOffer} months`}
            </Typography>

            <Typography variant="h6" color="text.primary" gutterBottom>
              {`Credit Available: £${creditAvailable}`}
            </Typography>
          </>
        ) : null}
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center" }}
        onClick={() => handleClick(creditAvailable)}
      >
        <Button variant="contained" name={code} role={code} data-testid={code}>
          {selected ? "Unselect Card" : "Select Card"}
        </Button>
      </CardActions>
    </Card>
  );
}
