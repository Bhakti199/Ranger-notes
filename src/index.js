import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterContextProvider, MainContextProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
