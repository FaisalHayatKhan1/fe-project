import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),
    button: {
      fontWeight: 600,
      cursor: "pointer",
      textTransform: "none",
    },
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.45rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    body1: {
      color: "#53667C",
      fontWeight: 400,
      fontSize: "1.125rem",
    },
    subtitle1: {
      color: "#53667C",
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      color: "#53667C",
      fontWeight: 400,
      fontSize: "0.875rem",
    },
  },
  palette: {
    primary: {
      main: "#032CFC",
    },
    secondary: {
      main: "#6F7F92",
    },
  },
});
