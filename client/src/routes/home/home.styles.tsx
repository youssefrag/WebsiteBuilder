import { styled } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";

export const HomeContainer = styled(Box)(() => ({
  backgroundColor: "#fdf2e9",
  padding: "4rem 7.2rem",
  height: "84vh",
  display: "flex",
  alignItems: "center",
  gap: "3rem",
  justifyContent: "space-between",
}));

export const DescriptionContainer = styled(Box)(() => ({
  height: "100%",
  width: "50%",
}));

export const DescriptionText = styled(Typography)(() => ({
  fontFamily: "Rubik",
  lineHeight: "1.5",
  fontSize: "1.1rem",
  color: "#555",
  fontWeight: "500",
}));

export const DescriptionTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  fontSize: "2.4rem",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  lineHeight: "1.2",
  marginBottom: "3.2rem",
  color: "#333",
}));

export const PictureContainer = styled(Box)(() => ({
  border: "10px solid",
}));
