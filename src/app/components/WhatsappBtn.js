import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/material";

export const WhatsappBtn = () => {
  return (
    <Box
      sx={{
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "grid",
        placeItems: "center",
        position: "sticky",
        top: "85vh",
        left: "92vw",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 35, color: "white" }} />
    </Box>
  );
};
