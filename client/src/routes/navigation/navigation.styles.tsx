import { styled } from "@mui/material/styles";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

export const NavigationContainer = styled(Box)(() => ({
  height: "100%",

  width: "100%",
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#7950f2",
}));

export const StyledButton = styled(Button)(() => ({
  color: "#5f3dc4",
  backgroundColor: "#fff",
  "&:hover": {
    color: "#fff",
  },
}));
