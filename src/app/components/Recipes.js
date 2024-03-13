"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Recipes = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={laptop ? { height: "70vh" } : {height: '100vh'}}>
      <Typography
        color="secondary"
        sx={
          laptop
            ? {
                fontSize: "2.5em",
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 800,
              }
            : {
                fontSize: "1.5em",
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 800,
              }
        }
      >
        ¿Qué vas a encontrar en el recetario?
      </Typography>
      
    </Box>
  );
};
