"use client";

import { createTheme } from "@mui/material/styles";

function getCssVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

const theme = createTheme({
  palette: {
    primary: {
      main: getCssVar("--color-primary", "#383A42"),
      contrastText: getCssVar("--color-text-primary", "#FFFFFF"),
    },
    secondary: {
      main: getCssVar("--color-secondary", "#FFC700"),
      contrastText: getCssVar("--color-black", "#1F2023"),
    },
    background: {
      default: getCssVar("--color-background", "#1F2023"),
      paper: "#2C2D31",
    },
    text: {
      primary: getCssVar("--color-text-primary", "#FFFFFF"),
      secondary: getCssVar("--color-text-secondary", "#B0B0B0"),
    },
    success: {
      main: getCssVar("--color-success", "#4CAF50"),
    },
    error: {
      main: getCssVar("--color-error", "#F44336"),
    },
    warning: {
      main: getCssVar("--color-warning", "#FFC107"),
    },
    info: {
      main: getCssVar("--color-info", "#2196F3"),
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
