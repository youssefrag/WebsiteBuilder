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
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#fdf2e9",
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: "Rubik",
  color: "#fff",
  backgroundColor: "#e67e22",
  padding: "0.4rem 0.8rem",
  borderRadius: "9px",
  "&:hover": {
    backgroundColor: "#cf711f",
  },
}));

export const StyledLink = styled(Typography)(() => ({
  cursor: "pointer",
  fontFamily: "Rubik",
  color: "#333",
  fontWeight: "500",
  fontSize: "1.2rem",
  "&:hover": {
    color: "#cf711f",
  },
}));

export const StyledTitle = styled(Typography)(() => ({
  fontFamily: "Rubik",
  color: "#333",
  fontSize: "1.8rem",
  cursor: "pointer",
}));
