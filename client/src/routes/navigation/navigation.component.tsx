import { Outlet, useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();

  return (
    <>
      <NavigationContainer>
        <StyledAppBar position="static">
          <StyledToolBar>
            <StyledTitle variant="h6" onClick={() => navigate("/")}>
              Website<strong style={{ color: "#e67e22" }}>B</strong>uilder
            </StyledTitle>
            <LinkContainer>
              <StyledLink onClick={() => navigate("login-register")}>
                Login
              </StyledLink>
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
