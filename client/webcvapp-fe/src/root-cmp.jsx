import React from "react";
import { Route, Routes } from "react-router";
import Buttons from "./components/Buttons";
import routes from "./utiles/routes";
import "../src/styles/css/Header.css";

export class RootCmp extends React.Component {
  render() {
    return (
      <>
        <Buttons />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.isExact}
              element={route.component}
              path={route.path}
              icon={route.icon}
            />
          ))}
        </Routes>
      </>
    );
  }
}
