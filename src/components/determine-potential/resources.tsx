import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import segmentationStepsData from "./determine-potential.data";

export const Resources = () => {
  return (
    <Box>
      <Typography variant="h3" my={"1rem"}>
        Resources
      </Typography>
      <Typography variant="subtitle1" mb={"1rem"} color="#53667C">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus,
        ligula in varius scelerisque, arcu ligula pulvinar diam, sit amet
        bibendum odio lorem vel mi.
      </Typography>
      {segmentationStepsData?.map(({ id, heading, detail, image }) => (
        <Stack alignItems="center" direction="row" spacing={4} key={id}>
          <Box>
            <img src={image} alt="" />
          </Box>
          <Box>
            <Typography variant="h4" my={"1rem"}>
              {heading}
            </Typography>
            <Typography variant="body2" mb={"1rem"} color="#53667C">
              {detail}
            </Typography>
          </Box>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="23"
              viewBox="0 0 19 16"
              fill="none"
            >
              <path
                d="M6.83333 5.99992L3.5 5.99992C2.39543 5.99992 1.5 6.89535 1.5 7.99992L1.5 13.3333C1.5 14.4378 2.39543 15.3333 3.5 15.3333L15.5 15.3333C16.6046 15.3333 17.5 14.4378 17.5 13.3333L17.5 7.99992C17.5 6.89535 16.6046 5.99992 15.5 5.99992L12.1667 5.99992M6.83333 9.33325L9.5 11.9999M9.5 11.9999L12.1667 9.33325M9.5 11.9999L9.5 0.666583"
                stroke="#032CFC"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};
