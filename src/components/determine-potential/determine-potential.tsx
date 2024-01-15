import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { ForwardIcon } from "assets";
import React from "react";
import { DeterminePotentialA } from "./determine-potential-a";
import { DeterminePotentialB } from "./determine-potential-b";
import { Resources } from "./resources";

export const DeterminePotential = ({ step }: any) => {
  return (
    <React.Fragment>
      <DeterminePotentialA step={step} />
      <DeterminePotentialB />
      <Resources />
    </React.Fragment>
  );
};
