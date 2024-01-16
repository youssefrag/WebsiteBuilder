import { styled } from "@mui/material/styles";

import { Box, Typography, Button } from "@mui/material";

export const CardContainer = styled(Box)(() => ({
  backgroundColor: "#fae5d3",
  height: "16rem",
  width: "14rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: "20px",
  boxShadow: "0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)",
}));
export const SiteName = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontWeight: "500",
  color: "#45260a",
  fontSize: "1.2rem",
}));

export const PreviewButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#1971c2",
  color: "#fff",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#1971c2",
    backgroundColor: "#fff",
  },
}));
export const EditButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  backgroundColor: "#ffd43b",
  color: "#fff",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    color: "#ffd43b",
    backgroundColor: "#fff",
  },
}));
