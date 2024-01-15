import { Box } from "@mui/material";
import { CustomizedSteppers, DeterminePotential } from "components";
import React from "react";
import { AccountPotential } from "components";
import { useSearchParams } from "react-router-dom";
export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");
  return (
    <Box sx={{ px: "8rem", py: "1rem" }}>
      <CustomizedSteppers>
        {step === "3" ? (
          <DeterminePotential step={step} />
        ) : (
          <AccountPotential step={step ? step : ""} />
        )}
      </CustomizedSteppers>
    </Box>
  );
};
