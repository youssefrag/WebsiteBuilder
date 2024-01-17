import { styled } from "@mui/material/styles";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const LinkContainer = styled(Box)(() => ({
  display: "flex",
  gap: "1.4rem",
  alignItems: "center",
}));

export const NavigationContainer = styled(Box)(() => ({
  height: "100%",
  width: "100%",
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: "16vh",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "1.8rem",
  marginRight: "1.8rem",
  [theme.breakpoints.down("lg")]: {
    marginRight: "0.1rem",
  },
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#fdf2e9",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#e67e22",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#cf711f",
  },
  // [theme.breakpoints.down("lg")]: {
  //   fontSize: "1rem",
  // },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  // [theme.breakpoints.down("sm")]: {
  //   fontSize: "1rem",
  // },
}));

export const StyledLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontFamily: "Rubik",
  color: "#333",
  fontWeight: "500",
  fontSize: "1.2rem",
  "&:hover": {
    color: "#cf711f",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  color: "#333",
  fontSize: "1.8rem",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    // fontSize: "1rem",
    display: "none",
  },
}));
