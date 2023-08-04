import { styled } from "@mui/material/styles";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const LinkContainer = styled(Box)(() => ({
  display: "flex",
  gap: "1.2rem",
  alignItems: "center",
}));

export const NavigationContainer = styled(Box)(() => ({
  height: "100%",
  width: "100%",
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#fdf2e9",
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#e67e22",
  padding: "0.4rem 0.8rem",
  "&:hover": {
    backgroundColor: "#cf711f",
  },
}));

export const StyledLink = styled(Typography)(() => ({
  cursor: "pointer",
  fontFamily: "Rubik",
  color: "#333",
  fontWeight: "500",
  fontSize: "1.1rem",
  "&:hover": {
    color: "#cf711f",
  },
}));

export const StyledTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  color: "#333",
}));
