import { Box } from "@mui/material";
import React from "react";
import { NavigationBar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          padding: "25px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
