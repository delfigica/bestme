"use client";
import { Box, ThemeProvider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Banner } from "../components/Banner";
import { Chanelleges } from "../components/Chanelleges";
import { theme } from "../../Style";
import { Recipes } from "../components/Recipes";
import { Testimonials } from "../components/Testimonials";
import { WhatsappBtn } from "../components/WhatsappBtn";
import { Faq } from "../components/Faq";

export default function Home() {
  const themeRes = useTheme();
  const laptop = useMediaQuery(themeRes.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#D7F5ED" }}>
        <WhatsappBtn />
        <Banner />
        <Box>
          <Typography
            sx={
              laptop
                ? {
                    fontSize: "1.3em",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }
                : {
                    fontSize: ".9em",
                    textAlign: "center",
                    textTransform: "uppercase",
                    margin: '10px 0'
                  }
            }
          >
            +60 recetas BM friendly con todo el power, fáciles y llenas de
            nutrientes
          </Typography>
        </Box>
        <Chanelleges />
        <Recipes />
        <Testimonials />
        <Faq />
      </Box>
    </ThemeProvider>
  );
}
