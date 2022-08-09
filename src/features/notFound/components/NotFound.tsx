import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/your-details");
  };
  return (
    <Box>
      <h1>Oh! This doesn't look right</h1>
      <p>
        Sorry, the page you requested doesn’t exist. Hit the browser back button
        or try one of the links below.
      </p>
      <Button variant="contained" onClick={handleClick} sx={{ mt: 4 }}>
        Find the right Credit Card for you
      </Button>
    </Box>
  );
}
