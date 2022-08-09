import { Box } from "@mui/material";
import { DetailsForm } from "../components/DetailsForm";

export function UserDetails() {
  return (
    <Box>
      <h3>
        Enter your details to get a list of cards that best suit your needs
      </h3>
      <DetailsForm />
    </Box>
  );
}
