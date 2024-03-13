"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Testimonials = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={laptop ? { height: "80vh" } : {}}>
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
        Testimonios
      </Typography>

      <Box
        sx={
          laptop
            ? { padding: "1em 3em", display: "flex", justifyContent: "center" }
            : { margin: "auto", padding: "1em" }
        }
      >
        <Box
          sx={
            laptop
              ? {
                  width: "350px",
                  height: "600px",
                  backgroundColor: "#8DD3C8",
                  borderRadius: "10px",
                }
              : {
                  width: "100%",
                  height: "500px",
                  backgroundColor: "#8DD3C8",
                  borderRadius: "10px",
                  margin: "5px auto",
                }
          }
        ></Box>
        <Box>
          <Box
            sx={
              laptop
                ? {
                    width: "500px",
                    height: "350px",
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    margin: "0px 10px",
                  }
                : {
                    width: "100%",
                    height: "350px",
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    margin: "10px 0px",
                  }
            }
          ></Box>
          <Box
            sx={
              laptop
                ? {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "500px",
                    height: "240px",
                    margin: "10px",
                  }
                : {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "100%",
                    height: "240px",
                    margin: "10px 0px",
                  }
            }
          ></Box>
        </Box>
        <Box>
          <Box
            sx={
              laptop
                ? {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "400px",
                    height: "400px",
                  }
                : {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "100%",
                    height: "400px",
                    margin: "10px 0px",
                  }
            }
          ></Box>
        </Box>
        <Box>
          <Box
            sx={
              laptop
                ? {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "350px",
                    height: "600px",
                    margin: "0 10px",
                  }
                : {
                    backgroundColor: "#8DD3C8",
                    borderRadius: "10px",
                    width: "100%",
                    height: "600px",
                    margin: "10px 0px",
                  }
            }
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
