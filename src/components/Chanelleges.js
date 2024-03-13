"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Chanelleges = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={laptop ? { height: "85vh", padding: "2em" } : { padding: "1em" }}>
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
        Conoce nuestros retos
      </Typography>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "20px auto",
              }
            : {}
        }
      >
        <Card
          sx={
            laptop
              ? {
                  width: "450px",
                  height: "550px",
                  padding: "2em",
                  backgroundColor: "#FEAE17",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }
              : {
                  width: "100%",
                  padding: "1em",
                  backgroundColor: "#FEAE17",
                  color: "white",
                  margin: "10px 0px",
                }
          }
        >
          <Typography
            sx={{
              fontSize: "1.4em",
              textAlign: "center",
              marginBottom: "10px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Plan Détox
          </Typography>
          <hr />
          <Typography
            sx={
              laptop
                ? { fontSize: ".9em", padding: "1em 0" }
                : { fontSize: ".9em", width: "95%", margin: "10px auto" }
            }
          >
            Descubre nuestro plan inicial diseñado para desinflamar y resetear
            tu intestino mientras adquieres conocimientos esenciales sobre
            nutrición y adoptas hábitos saludables que transformarán tu
            bienestar integral. En este programa aprenderás a: <br />
            <ul>
              <li>Seleccionar y combinar tus alimentos de manera óptima.</li>
              <li>Calcular tus necesidades de macro y micronutrientes.</li>
            </ul>
            ¡Recibirás recetas de cocina deliciosas y nutritivas! Además, te
            proporcionaremos propuestas de rutinas de musculación, acceso a
            clases de actividad física online y valiosas recomendaciones sobre
            suplementación, todo ello con el objetivo de mejorar tu peso,
            energía e imagen corporal de manera sostenible. Sumérgete en este
            viaje hacia una vida más saludable y equilibrada con nuestro plan
            inicial.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon />
              <Typography sx={{ marginLeft: "5px" }}>10 días</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8DD3C8",
                margin: "10px 0px",
                fontWeight: 600,
                color: "black",
                "&:hover": {
                  backgroundColor: "#8DD3C1",
                },
              }}
            >
              Consultar
            </Button>
          </Box>
        </Card>
        <Card
          sx={
            laptop
              ? {
                  width: "450px",
                  height: "550px",
                  padding: "2em",
                  backgroundColor: "#FEAE17",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }
              : {
                  width: "100%",
                  padding: "1em",
                  backgroundColor: "#FEAE17",
                  color: "white",
                  margin: "10px 0px",
                }
          }
        >
          <Typography
            sx={{
              fontSize: "1.4em",
              textAlign: "center",
              marginBottom: "10px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Plan Mantenimiento
          </Typography>
          <hr />
          <Typography sx={{ fontSize: ".9em", paddingTop: "1em" }}>
            Nuestro plan de mantenimiento es la continuación natural de tu viaje
            hacia una vida más saludable. Durante esta etapa, seguirás
            recibiendo una gran cantidad de recursos valiosos para apoyar tu
            bienestar diario. Esto incluye recetas saludables nuevas todos los
            días, talleres interactivos y actualizaciones sobre temas relevantes
            como sarcopenia, resistencia a la insulina, problemas de tiroides y
            lectura de etiquetas nutricionales, entre otros. Nuestro enfoque
            principal es ayudarte a consolidar los cambios positivos logrados y
            los buenos hábitos adquiridos durante el programa inicial, pero sin
            recurrir a conductas extremas que puedan poner en riesgo tus
            avances. Te brindaremos el apoyo y la orientación necesarios para
            mantener un estilo de vida saludable a largo plazo, promoviendo la
            consistencia y la sostenibilidad en tus hábitos alimenticios y de
            bienestar.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon />
              <Typography sx={{ marginLeft: "5px" }}>30 días</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8DD3C8",
                margin: "10px 0px",
                fontWeight: 600,
                color: "black",
                "&:hover": {
                  backgroundColor: "#8DD3C1",
                },
              }}
            >
              Consultar
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
