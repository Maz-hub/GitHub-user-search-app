import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Import TanStack Query client and provider for managing server state
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize a new QueryClient instance to handle caching and fetching logic
const queryClient = new QueryClient();

// Mount the React application and wrap it with the QueryClientProvider
// to make the TanStack Query client available throughout the component tree
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </QueryClientProvider>
);
