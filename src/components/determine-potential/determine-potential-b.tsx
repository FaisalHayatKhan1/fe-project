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
import { kpiData, teamRolesData } from "./determine-potential.data";

export const DeterminePotentialB = () => {
  return (
    <Box mt="3rem">
      <Box>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Stack id="b" direction="row" spacing={1} sx={{ alignItems: "center" }}>
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
        <Typography variant="body1" mb={"1rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus,
          ligula in varius scelerisque, arcu ligula pulvinar diam, sit amet
          bibendum odio lorem vel mi. Quisque vestibulum lacinia mattis. Donec
          ut nunc lorem. Etiam eu dictum nunc. Vestibulum molestie et quam sit
          amet fermentum. Donec tincidunt efficitur scelerisque. Donec at est id
          libero tempor aliquet.
        </Typography>
        <Typography variant="body1">
          Etiam mollis nec enim non tristique. Suspendisse in metus condimentum,
          feugiat ex quis, sollicitudin neque. Nulla vestibulum ullamcorper
          risus, vitae vestibulum tellus porta et. Nam pulvinar nibh eget nunc
          vulputate maximus. Curabitur elementum vestibulum eros, vitae
          facilisis justo tempus id.
        </Typography>
        <List sx={{ listStyle: "decimal", pl: 4 }}>
          <ListItem sx={{ display: "list-item", fontSize: "1.125rem", px: 0 }}>
            <span style={{ fontWeight: 600 }}>Lorem Ipsum.</span>
            dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem sx={{ display: "list-item", fontSize: "1.125rem", px: 0 }}>
            <span style={{ fontWeight: 600 }}>Pellentesque id ipsum.</span>
            Pellentesque id ipsum ut ipsum elementum fermentum vitae ut ipsum.
          </ListItem>
          <ListItem sx={{ display: "list-item", fontSize: "1.125rem", px: 0 }}>
            <span style={{ fontWeight: 600 }}>Donec ultrices. </span>
            Donec ultrices magna elit, et consectetur diam egestas a.
          </ListItem>
        </List>
      </Box>
      <Box mt="1rem">
        <Typography variant="h3" my={"0.5rem"} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body1" mb={"1rem"} textAlign="center">
          Donec ultrices magna elit, et consectetur diam.
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
        sx={{
          border: "2px solid #50B72C",
          borderRadius: "0.5rem",
          p: "1rem",
          backgroundColor: "#F7FFF4",
        }}
      >
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M14.3333 6.83333C12.8606 6.83333 11.6667 5.63943 11.6667 4.16667C11.6667 2.69391 12.8606 1.5 14.3333 1.5C15.8061 1.5 17 2.69391 17 4.16667C17 5.63943 15.8061 6.83333 14.3333 6.83333ZM14.3333 6.83333V13.0556C14.3333 13.5271 14.146 13.9792 13.8126 14.3126C13.4792 14.646 13.0271 14.8333 12.5556 14.8333H9.88889M3.66667 12.1667C5.13943 12.1667 6.33333 13.3606 6.33333 14.8333C6.33333 16.3061 5.13943 17.5 3.66667 17.5C2.19391 17.5 1 16.3061 1 14.8333C1 13.3606 2.19391 12.1667 3.66667 12.1667ZM3.66667 12.1667V1.5"
                stroke="#50B72C"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Box>
          <Box>
            <Typography
              fontSize={"0.75rem"}
              fontWeight={400}
              color={"secondary.main"}
            >
              Decision Point:
            </Typography>
            <Typography variant="h5" mb={"0.5rem"} textAlign="center">
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body1" my="1rem">
          As you build your ROAD model, you will have to select "break points",
          or thresholds for whitespace and current spend that will define your
          segments. This will be an iterative process that will take several
          adjustments. Figure 7. below provides an example model showing break
          points and the resulting concentration of accounts in each quadrant.
        </Typography>
        <Box>
          <img
            src={UploadImage}
            alt="image-upload"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography variant="body1" my="1rem">
          As you build your ROAD model, you will have to select "break points",
          or thresholds for whitespace and current spend that will define your
          segments. This will be an iterative process that will take several
          adjustments. Figure 7. below provides an example model showing break
          points and the resulting concentration of accounts in each quadrant.
        </Typography>
        <Box
          mt="2rem"
          p="1rem"
          pl="1.5rem"
          borderLeft={"2px dashed #032CFC"}
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
            As you build your ROAD model, you will have to select "break
            points", or thresholds for whitespace and current spend that will
            define your segments. This will be an iterative process that will
            take several adjustments. Figure 7. below provides an example model
            showing break points and the resulting concentration of accounts in
            each quadrant.
          </Typography>
        </Box>
      </Box>

      <Box mt={"5rem"}>
        <Typography variant="h3" my={"1rem"}>
          Project Team
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
                  Role
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
                  Primary Responsibilities
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
                  Level of Involvement
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
                  Common GTM Titles
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamRolesData.map(
                (
                  {
                    Role,
                    Responsibilities,
                    LevelOfInvolvement,
                    CommonGTMTitles,
                  },
                  index
                ) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 600, fontSize: "0.75rem" }}>
                      {Role}
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.75rem" }}>
                      <ul>
                        {Responsibilities?.map((res) => (
                          <li>{res}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.75rem" }}>
                      <ul>
                        <li>{LevelOfInvolvement}</li>
                      </ul>
                    </TableCell>
                    <TableCell sx={{ fontSize: "0.75rem" }}>
                      <ul>
                        {CommonGTMTitles?.map((gtmTitles) => (
                          <li>{gtmTitles}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <ul
        style={{
          borderLeft: "1px solid #ccc",
          marginLeft: "-20px",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <li>
          <Typography variant="body2" my={"1rem"} color="#53667C">
            As you build your ROAD model, you will have to select "break
            points", or thresholds for whitespace and current spend that will
            define your segments. This will be an iterative process that will
            take several adjustments. Figure 7. below provides an example model
            showing break points and the resulting concentration of accounts in
            each quadrant.
          </Typography>
        </li>
      </ul>

    </Box>
  );
};
