import { styled } from "@mui/material/styles";

import { AppBar, Box, Toolbar } from "@mui/material";

export const NavigationContainer = styled(Box)(() => ({
  height: "70px",
  width: "100%",
  marginBottom: "25px",
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#7950f2",
}));
