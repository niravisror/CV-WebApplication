import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../utiles/routes";
import { Chip } from "@mui/material";

function Buttons() {
  return (
    <ButtonGroup>
      {routes.map((route, index) => (
        <ButtonRoute key={index} to={routes[index].path}>
          <Chip icon={route.icon} label={route.label} />
        </ButtonRoute>
      ))}
    </ButtonGroup>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const ButtonRoute = styled(Link)`
  border-radius: 10px;
  text-decoration: none;
  margin: 10px 5px;
  cursor: pointer;
`;

export default Buttons;
