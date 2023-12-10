import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <div className="aaa">
        <RouterProvider router={routers} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
