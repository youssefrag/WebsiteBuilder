import { Outlet, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectUser, loginUser, logoutUser } from "../../store/user/userSlice";

import { getFirstName } from "../../utils/naming";

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

  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (currentUser) {
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
                  {getFirstName(currentUser.name)}'s Websites
                </StyledLink>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </LinkContainer>
            </StyledToolBar>
          </StyledAppBar>
        </NavigationContainer>
        <Outlet />
      </>
    );
  } else {
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
                  Login / Register
                </StyledLink>
                <StyledButton>Start Building</StyledButton>
              </LinkContainer>
            </StyledToolBar>
          </StyledAppBar>
        </NavigationContainer>
        <Outlet />
      </>
    );
  }
};

export default Navigation;
