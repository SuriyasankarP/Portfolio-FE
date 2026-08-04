import { createTheme } from "@mui/material/styles";

const commonTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 700 },
  h2: { fontWeight: 700 },
  h3: { fontWeight: 600 },
  h4: { fontWeight: 600 },
  h5: { fontWeight: 500 },
  h6: { fontWeight: 500 },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ce93d8" },
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#e6edf3", secondary: "#8b949e" },
  },
  typography: commonTypography,
  shape: { borderRadius: 12 },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#1a1a2e", secondary: "#555555" },
  },
  typography: commonTypography,
  shape: { borderRadius: 12 },
});
