import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

import {
  NavigationContainer,
  StyledAppBar,
  StyledButton,
  StyledToolBar,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <StyledAppBar position="static">
          <StyledToolBar>
            <Typography variant="h6" component="div">
              WebsiteBuilder
            </Typography>
            <StyledButton>Login</StyledButton>
          </StyledToolBar>
        </StyledAppBar>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
