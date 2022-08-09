import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreditCards } from "../features/creditCards";
import { NotFound } from "../features/notFound";
import { UserDetails } from "../features/userDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/your-details" element={<UserDetails />} />
      <Route path="/credit-cards" element={<CreditCards />} />
      <Route path="/" element={<Navigate to="/your-details" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
