import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ForwardIcon, StepIcon, UploadImage } from "assets";
import { kpiData } from "./determine-potential.data";

export const DeterminePotentialA = ({ step }: any) => {
  return (
    <Box>
      {" "}
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Box component="span">
          <img src={ForwardIcon} alt="forward" />
        </Box>
        <Typography variant="h4" color={"primary.main"}>
          Step {step}
        </Typography>
      </Stack>
      <Typography variant="h1" mt={2}>
        Determine <br />
        Account Potential
      </Typography>
      <Grid
        container
        mt="2rem"
        p="1rem"
        borderRadius="0.5rem"
        sx={{ backgroundColor: "white" }}
      >
        <Grid item xs={6}>
          <Typography variant="h6">Objective:</Typography>
          <Typography variant="body2" mb="0.875rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id ipsum ut ipsum elementum fermentum vitae ut ipsum
            magna elit.
          </Typography>
          <Typography variant="h6">Output:</Typography>
          <Typography variant="body2" mb="0.875rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id ipsum ut ipsum elementum fermentum vitae ut ipsum
            magna elit.
          </Typography>
          <Typography variant="h6">
            Duration:{" "}
            <Box component="span" fontWeight={400}>
              1-2 weeks
            </Box>{" "}
          </Typography>
        </Grid>
        <Grid xs={2} display={"flex"} justifyContent={"center"}>
          <Box width={"2px"} height={"200px"}></Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Stack spacing={"0.5rem"}>
            <Typography variant="h6">Step 7 Project Resources:</Typography>
            <a
              href="#"
              style={{
                color: "#53667C",
                fontSize: "0.875rem",
                display: "flex",
              }}
            >
              <Box component="span" mr={"0.5rem"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                >
                  <path
                    d="M7.20019 1H2.4002C2.08194 1 1.77671 1.12643 1.55167 1.35147C1.32662 1.57652 1.2002 1.88174 1.2002 2.2V11.8C1.2002 12.1183 1.32662 12.4235 1.55167 12.6485C1.77671 12.8736 2.08194 13 2.4002 13H9.60019C9.91845 13 10.2237 12.8736 10.4487 12.6485C10.6738 12.4235 10.8002 12.1183 10.8002 11.8V4.6M7.20019 1L10.8002 4.6M7.20019 1V4.6H10.8002M8.40019 7.6H3.6002M8.40019 10H3.6002M4.8002 5.2H3.6002"
                    stroke="#53667C"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Box>
              Step 7 Project Resources:
            </a>
            <a
              href="#"
              style={{
                color: "#53667C",
                fontSize: "0.875rem",
                display: "flex",
              }}
            >
              <Box component="span" mr={"0.5rem"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M2.5 1V8.5C2.5 9.32843 3.17157 10 4 10H5.5M2.5 1H1.5M2.5 1H13.5M13.5 1H14.5M13.5 1V8.5C13.5 9.32843 12.8284 10 12 10H10.5M5.5 10H10.5M5.5 10L4.83333 12M10.5 10L11.1667 12M11.1667 12L11.5 13M11.1667 12H4.83333M4.83333 12L4.5 13M5 7L7 5L8.43173 6.43173C9.1028 5.46867 9.98025 4.66015 11 4.07026"
                    stroke="#53667C"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Box>
              Example Account Segmentation...
            </a>
          </Stack>
          <Button
            sx={{
              fontSize: "0.875rem",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Box component="span" mr={"0.5rem"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M5.66962 10.8351L8.33456 13.5M8.33456 13.5L10.9995 10.8351M8.33456 13.5V7.50388M14.2507 11.5613C14.83 11.1539 15.2643 10.5727 15.4908 9.90176C15.7173 9.23086 15.7241 8.50524 15.5102 7.83022C15.2963 7.1552 14.8729 6.56588 14.3014 6.1478C13.7299 5.72972 13.0401 5.50462 12.332 5.50518H11.4925C11.2921 4.72426 10.9172 3.99898 10.396 3.38394C9.87473 2.76889 9.22075 2.2801 8.48327 1.95438C7.74579 1.62865 6.94403 1.47447 6.13834 1.50344C5.33265 1.53242 4.54403 1.74379 3.83185 2.12165C3.11967 2.49951 2.50249 3.03401 2.02677 3.68491C1.55105 4.33581 1.2292 5.08614 1.08543 5.87943C0.941662 6.67272 0.979731 7.48829 1.19677 8.26474C1.41381 9.04118 1.80416 9.75828 2.33844 10.362"
                  stroke="#032CFC"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Box>
            Download All
          </Button>
        </Grid>
      </Grid>
      <Box mt="3rem">
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Stack
            id="a"
            direction="row"
            spacing={1}
            sx={{ alignItems: "center" }}
          >
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
        <List sx={{ listStyle: "decimal", pl: 4 }}>
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Pellentesque id ipsum ut ipsum elementum fermentum vitae ut ipsum.",
            "Donec ultrices magna elit, et consectetur diam egestas a.",
          ].map((item) => (
            <ListItem
              sx={{ display: "list-item", fontSize: "1.125rem", px: 0 }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h3" my={"1rem"} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box>
          <img
            src={UploadImage}
            alt="image-upload"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box
        mt="2rem"
        p="1rem"
        border={"2px dashed #032CFC"}
        borderRadius="0.5rem"
        sx={{ background: "#EDF4F7" }}
      >
        <Box display={"flex"} alignItems={"center"} mb={"1rem"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              d="M12.6364 14.0455V12.591C12.6364 11.8194 12.3299 11.0795 11.7843 10.5339C11.2388 9.98836 10.4988 9.68186 9.72727 9.68186H3.90909C3.13755 9.68186 2.39761 9.98836 1.85205 10.5339C1.30649 11.0795 1 11.8194 1 12.591V14.0455M17 14.0455V12.591C16.9995 11.9464 16.785 11.3202 16.3901 10.8108C15.9952 10.3014 15.4423 9.93755 14.8182 9.77641M11.9091 1.04914C12.5348 1.20935 13.0895 1.57328 13.4856 2.08354C13.8816 2.5938 14.0966 3.22138 14.0966 3.86732C14.0966 4.51326 13.8816 5.14083 13.4856 5.65109C13.0895 6.16135 12.5348 6.52528 11.9091 6.6855M9.72727 3.86368C9.72727 5.47033 8.42483 6.77277 6.81818 6.77277C5.21154 6.77277 3.90909 5.47033 3.90909 3.86368C3.90909 2.25703 5.21154 0.95459 6.81818 0.95459C8.42483 0.95459 9.72727 2.25703 9.72727 3.86368Z"
              stroke="#032CFC"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Typography
            variant="h6"
            ml="0.5rem"
            textAlign="center"
            color="primary.main"
          >
            Pro Perspective
          </Typography>
        </Box>
        <Typography variant="subtitle1" my={"1rem"}>
          As you build your ROAD model, you will have to select "break points",
          or thresholds for whitespace and current spend that will define your
          segments. This will be an iterative process that will take several
          adjustments. Figure 7. below provides an example model showing break
          points and the resulting concentration of accounts in each quadrant.
        </Typography>
      </Box>
      <Box mt={"5rem"}>
        <Typography variant="h3" my={"1rem"}>
          Project KPIs
        </Typography>
        <Typography variant="subtitle1" mb={"1rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus,
          ligula in varius scelerisque, arcu ligula pulvinar diam, sit amet
          bibendum odio lorem vel mi. Quisque vestibulum lacinia mattis. Donec
          ut nunc lorem. Etiam eu dictum nunc. Vestibulum molestie et quam sit
          amet fermentum. Donec tincidunt efficitur scelerisque. Donec at est id
          libero tempor aliquet.
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ height: "20px" }}>
                <TableCell
                  sx={{
                    background: "#f0f4f5",
                    color: "secondary.main",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    borderTop: "1px solid #D3DFE5",
                    py: "0.5rem",
                  }}
                >
                  KPI
                </TableCell>
                <TableCell
                  sx={{
                    background: "#f0f4f5",
                    color: "secondary.main",
                    borderTop: "1px solid #D3DFE5",
                    fontWeight: 600,
                    fontSize: "0.75rem",

                    py: "0.5rem",
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  sx={{
                    background: "#f0f4f5",
                    color: "secondary.main",
                    borderTop: "1px solid #D3DFE5",
                    fontWeight: 600,
                    fontSize: "0.75rem",

                    py: "0.5rem",
                  }}
                >
                  Potential Impact
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kpiData.map((kpi, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem" }}>
                    {kpi.KPI}
                  </TableCell>
                  <TableCell sx={{ fontSize: "0.75rem" }}>
                    {kpi.Description}
                  </TableCell>
                  <TableCell sx={{ fontSize: "0.75rem" }}>
                    {kpi.PotentialImpact}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
