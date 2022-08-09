import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Button } from "@mui/material";
import { useUserContext } from "../../context/UserContext";

export const NavigationBar = () => {
  const { user } = useUserContext();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CreditCardIcon sx={{ display: { md: "flex" }, mr: 3 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              "& a": {
                color: "white",
                textDecoration: "none",
              },
              textDecoration: "none",
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <NavLink to="/your-details">Credit Card Finder</NavLink>
          </Typography>
          <Box
            sx={{
              display: "flex",
              "& a": {
                color: "white",
                textDecoration: "none",
              },
            }}
          >
            <NavLink to={`/your-details`}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Your Details
              </Button>
            </NavLink>
            {user.firstName ? (
              <NavLink to={`/credit-cards`}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Credit Cards
                </Button>
              </NavLink>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
