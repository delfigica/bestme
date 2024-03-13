'use client';
import { createTheme } from "@mui/material";

const colors = {
  lightBlue: "#D7F5ED",
  darkBlue: "#8DD3C8" ,
};

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: colors.lightBlue,
    },
    secondary: {
      main: colors.darkBlue,
    },
  },
});