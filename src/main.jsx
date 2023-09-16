import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import { LangProvider } from "./plugins";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
);
