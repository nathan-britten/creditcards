import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { UserProvider } from "./context/UserContext";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Box className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <UserProvider>
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </UserProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
