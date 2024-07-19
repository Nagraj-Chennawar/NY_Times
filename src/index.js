import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

const GlobalProvider = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <BrowserRouter>
        <ContextProvider>
          <CssBaseline />
          <App />
        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const production = <GlobalProvider />;
const development = (
  <>
    <React.StrictMode>
      <GlobalProvider />
    </React.StrictMode>
  </>
);

root.render(process.env.NODE_ENV === "development" ? development : production);
