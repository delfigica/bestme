"use client";
import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

export const Banner = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? {
              minHeight: "75vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
            }
      }
    >
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "700px",
              }
            : { display: "flex", flexDirection: "column", alignItems: "center" }
        }
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={
              laptop
                ? { fontSize: "6em", fontWeight: 600, color: "#8DD3C8" }
                : { fontSize: "3.5em", fontWeight: 600, color: "#8DD3C8" }
            }
          >
            Best
          </Typography>
          <Typography
            sx={
              laptop
                ? { fontSize: "6em", fontWeight: 600 }
                : { fontSize: "3.5em", fontWeight: 600 }
            }
          >
            Me
          </Typography>
        </Box>
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "2em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: "-30px",
                }
              : {
                  fontSize: "1.3em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginTop: "-10px",
                }
          }
        >
          body revolution
        </Typography>
        <Typography sx={laptop ? { fontSize: "1.2em" } : { fontSize: ".9em" }}>
          by Bergoglio & Rinaldis
        </Typography>
        <Link href="/comprar-ahora">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8DD3C8",
              margin: "10px 0px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#8DD3C1",
              },
            }}
          >
            Comprar recetario
          </Button>
        </Link>
      </Box>
      <Box sx={{ width: "250px" }}>
        <img src="/phone.png" />
      </Box>
    </Box>
  );
};
