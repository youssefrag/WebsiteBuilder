import { Outlet } from "react-router-dom";
import { Typography, Button, IconButton } from "@mui/material";

import {
  NavigationContainer,
  StyledAppBar,
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
            <Button color="inherit">Login</Button>
          </StyledToolBar>
        </StyledAppBar>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
