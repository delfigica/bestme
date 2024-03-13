import React from "react";
import { Box, Button, Card, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../../Style";
import { WhatsappBtn } from "../../components/WhatsappBtn";
import Link from "next/link";

export default function BuyNow() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#D7F5ED",
          padding: "2em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Link href="/" style={{ margin: "0 auto" }}>
          <Button
            color="secondary"
            variant="contained"
            sx={{ margin: "0 auto" }}
          >
            Volver
          </Button>
        </Link>
        <WhatsappBtn />
        <Typography
          sx={{
            fontSize: "2.5em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#8DD3C8",
            fontWeight: 800,
          }}
        >
          Obten nuestro recetario
        </Typography>
        <Card
          sx={{ width: "600px", height: "300px", margin: "10px auto" }}
        ></Card>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px auto",
          }}
        >
          <Button variant="contained" color="secondary">
            Comprar via transferencia
          </Button>
          <Button variant="contained" color="secondary">
            Mercado Pago
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
