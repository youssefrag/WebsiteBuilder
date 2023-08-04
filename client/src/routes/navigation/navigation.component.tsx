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
            <StyledTitle variant="h6">
              Website<strong style={{ color: "#e67e22" }}>B</strong>uilder
            </StyledTitle>
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
