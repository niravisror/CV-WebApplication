import React from "react";
import ReactDOM from "react-dom/client";
import { RootCmp } from "./root-cmp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootCmp />
    </BrowserRouter>
  </React.StrictMode>
);
