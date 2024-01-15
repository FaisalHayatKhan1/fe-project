import { Box, Divider, Stack, Typography } from "@mui/material";
import { ForwardIcon, StepIcon } from "assets";
import React from "react";

export const AccountPotential = ({ step }: any): JSX.Element => {
  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Box component="span">
          <img src={ForwardIcon} alt="forward" />
        </Box>
        <Typography variant="h4" color={"primary.main"}>
          Step {step}
        </Typography>
      </Stack>
      <Typography variant="h1" mt={2}>
        Account Potential
      </Typography>
      <Box mt="3rem">
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box component="span">
              <img src={StepIcon} alt="forward" />
            </Box>
            <Typography variant="h2" color="primary.main">
              a
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
        </Stack>
        <Typography variant="h3" my={"1rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus,
          ligula in varius scelerisque, arcu ligula pulvinar diam, sit amet
          bibendum odio lorem vel mi. Quisque vestibulum lacinia mattis. Donec
          ut nunc lorem. Etiam eu dictum nunc. Vestibulum molestie et quam sit
          amet fermentum. Donec tincidunt efficitur scelerisque. Donec at est id
          libero tempor aliquet.
        </Typography>
        <Typography variant="body1" mt="1rem">
          Etiam mollis nec enim non tristique. Suspendisse in metus condimentum,
          feugiat ex quis, sollicitudin neque. Nulla vestibulum ullamcorper
          risus, vitae vestibulum tellus porta et. Nam pulvinar nibh eget nunc
          vulputate maximus. Curabitur elementum vestibulum eros, vitae
          facilisis justo tempus id.
        </Typography>
      </Box>
      <Box mt="3rem">
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box component="span">
              <img src={StepIcon} alt="forward" />
            </Box>
            <Typography variant="h2" color="primary.main">
              b
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
        </Stack>
        <Typography variant="h3" my={"1rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus,
          ligula in varius scelerisque, arcu ligula pulvinar diam, sit amet
          bibendum odio lorem vel mi. Quisque vestibulum lacinia mattis. Donec
          ut nunc lorem. Etiam eu dictum nunc. Vestibulum molestie et quam sit
          amet fermentum. Donec tincidunt efficitur scelerisque. Donec at est id
          libero tempor aliquet.
        </Typography>
        <Typography variant="body1" mt="1rem">
          Etiam mollis nec enim non tristique. Suspendisse in metus condimentum,
          feugiat ex quis, sollicitudin neque. Nulla vestibulum ullamcorper
          risus, vitae vestibulum tellus porta et. Nam pulvinar nibh eget nunc
          vulputate maximus. Curabitur elementum vestibulum eros, vitae
          facilisis justo tempus id.
        </Typography>
      </Box>
    </Box>
  );
};
