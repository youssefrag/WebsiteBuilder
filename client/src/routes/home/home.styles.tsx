import { styled } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";

export const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fdf2e9",
  padding: "4rem 7.2rem",
  height: "84vh",
  display: "flex",
  alignItems: "flex-start",
  gap: "6rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    // padding: "3.8rem 4rem",
    padding: "6rem 4rem 5rem 4rem",
    // alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    // padding: "6rem 4rem 5rem 4rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4rem 1.6rem 8rem 1.6rem",
  },
}));

export const DescriptionContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  lineHeight: "1.5",
  fontSize: "1.1rem",
  color: "#555",
  fontWeight: "500",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));

export const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontSize: "2.4rem",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  lineHeight: "1.2",
  marginBottom: "3.2rem",
  color: "#333",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "0.1rem",
  },
}));

export const PictureContainer = styled(Box)(({ theme }) => ({
  border: "1px solid",
  width: "40rem",
  [theme.breakpoints.down("lg")]: {
    width: "30rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "25rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "20rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "10rem",
  },
}));
