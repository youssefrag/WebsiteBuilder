import { Outlet } from "react-router-dom";

import {
  LinkContainer,
  NavigationContainer,
  StyledAppBar,
  StyledButton,
  StyledLink,
  StyledTitle,
  StyledToolBar,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <StyledAppBar position="static">
          <StyledToolBar>
            <StyledTitle variant="h6">WebsiteBuilder</StyledTitle>
            <LinkContainer>
              <StyledLink>Login</StyledLink>
              <StyledButton>Start Building</StyledButton>
            </LinkContainer>
          </StyledToolBar>
        </StyledAppBar>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
